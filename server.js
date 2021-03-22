const PORT = process.env.PORT || 5000;
var express = require("express");
var cookieParser = require('cookie-parser');
var cors = require("cors");
var morgan = require("morgan");
var jwt = require('jsonwebtoken');
var http = require("http");
var path = require('path')
const multer = require('multer');
const fs = require('fs');
const admin = require("firebase-admin");
var { userModel, adminModel, order } = require("./dbrepo/models");

var { SERVER_SECRET } = require("./core/index");

var authRoutes = require("./routes/auth");
const { json } = require("body-parser");

var app = express();

var server = http.createServer(app);


const storage = multer.diskStorage({
    destination: './uploads/',
    filename: function (req, file, cb) {
        cb(null, `${new Date().getTime()}-${file.filename}.${file.mimetype.split("/")[1]}`)
    }
})
var upload = multer({ storage: storage })




var SERVICE_ACCOUNT = JSON.parse(SERVICE_ACCOUNT);


admin.initializeApp({
    credential: admin.credential.cert(SERVICE_ACCOUNT),
    databaseURL: process.env.databaseURL
});



const bucket = admin.storage().bucket(process.env.bucket);

app.use(express.json());


app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(morgan('dev'));



app.use("/", express.static(path.resolve(path.join(__dirname, "./front-end/build"))));

app.use('/auth', authRoutes);

app.use(function (req, res, next) {
    console.log(req.cookies.jToken)
    if (!req.cookies.jToken) {
        res.status(401).send("include http-only credentials with every request")
        return;
    }
    jwt.verify(req.cookies.jToken, SERVER_SECRET, function (err, decodedData) {
        if (!err) {

            const issueDate = decodedData.iat * 1000;
            const nowDate = new Date().getTime();
            const diff = nowDate - issueDate;

            if (diff > 300000) {
                res.status(401).send("token expired")
            } else {
                var token = jwt.sign({
                    id: decodedData.id,
                    name: decodedData.name,
                    email: decodedData.email,
                    role: decodedData.role
                }, SERVER_SECRET)
                res.cookie('jToken', token, {
                    maxAge: 86400000,
                    httpOnly: true
                });
                req.body.jToken = decodedData
                req.headers.jToken = decodedData
                next();
            }
        } else {
            res.status(401).send("invalid token")
        }
    });
})


app.get("/profile", (req, res, next) => {
    console.log(req.body);

    userModel.findById(req.body.jToken.id, 'name email phone createdOn role', function (err, doc) {
        if (!err) {
            res.send({
                profile: doc,
                status: 200
            })

        } else {
            res.send({
                message: "Server Error",
                status: 500
            });
        }
    });
})

app.post("/admindashboard", upload.any(), (req, res, next) => {

    console.log("req.body: ", req.body);
    bucket.upload(
        req.files[0].path,
        function (err, file, apiResponse) {
            if (!err) {
                file.getSignedUrl({
                    action: 'read',
                    expires: '03-09-2491'
                }).then((urlData, err) => {
                    if (!err) {
                        console.log("public downloadable url: ", urlData[0])
                        console.log("bhai ya mera token han", req.headers.jToken.id)
                        userModel.findById(req.headers.jToken.id, 'email role', (err, user) => {
                            console.log("user =======>", user.email)
                            if (!err) {
                                adminModel.create({
                                    "productname": req.body.productName,
                                    "email": user.email,
                                    "price": req.body.price,
                                    "productimages": urlData[0],
                                    "stock": req.body.stock,
                                    "description": req.body.description
                                }).then((data) => {
                                    console.log(data)
                                    res.send({
                                        status: 200,
                                        message: "Product add successfully",
                                        data: data
                                    })
                                }).catch(() => {
                                    console.log(err);
                                    res.status(500).send({
                                        message: "user create error, " + err
                                    })
                                })
                            }
                            else {
                                res.send({
                                    message: err,
                                    status: 404
                                })
                            }
                            // if (!err) {
                            //     adminModel.create({
                            //         "productname": req.body.productName,
                            //         "email": user.email,
                            //         "price": req.body.price,
                            //         "productimages": urlData[0],
                            //         "stock": req.body.stock,
                            //         "description": req.body.description
                            //     }).then((data) => {
                            //         console.log(data)
                            //         res.send({
                            //             status: 200,
                            //             message: "Product add successfully",
                            //             data: data
                            //         })
                            //     }).catch(() => {
                            //         console.log(err);
                            //         res.status(500).send({
                            //             message: "user create error, " + err
                            //         })
                            //     })
                            // }
                            // else {
                            //     res.send("err")
                            // }
                        })
                        try {
                            fs.unlinkSync(req.files[0].path)
                        } catch (err) {
                            console.error(err)
                        }
                    }
                })
            } else {
                console.log("err: ", err)
                res.status(500).send();
            }
        });
})


app.get('/getProducts', (req, res, next) => {
    adminModel.find({}, (err, data) => {
        if (!err) {
            res.send({
                products: data,
                status: 200
            })
        }
        else {
            res.send({
                message: err,
                status: 404
            })
        }
    })
})
app.post('/order', (req, res, next) => {
    if (!req.body.name || !req.body.phonenumber || !req.body.address || !req.body.orders || !req.body.totalPrice) {
        res.send({
            message: "Please Provide All Info",
            status: 300
        });
    }
    userModel.findById(req.body.jToken.id, 'email ', function (err, user) {
        console.log('latest body', user);
        if (!err) {
            order.create({
                "name": req.body.name,
                "email": user.email,
                "phonenumber": req.body.phonenumber,
                "status": "IS Review",
                "address": req.body.address,
                "orders": req.body.orders,
                "totalPrice": req.body.totalPrice,
                // "createdOn": new Date().toLocaleDateString()
            }).then((data) => {
                res.send({
                    status: 200,
                    message: "Order Done",
                    data: data
                })
            }).catch((err) => {
                res.send({
                    status: 500,
                    message: "Order Err" + err
                })
            })
        } else {
            res.send({
                message: "Error" + err,
                status: 404
            })
        }

    })
})

app.get('/myorder', (req, res, next) => {

    userModel.findOne({ email: req.body.jToken.email }, (err, user) => {
        if (user) {
            order.find({ email: req.body.jToken.email }, (err, data) => {
                if (data) {
                    console.log("is ma date a rahe han ", data)
                    res.send({
                        data: data,
                        status: 200
                    })
                }
                else {
                    res.status(404).send(err)
                }
            })
        } else {
            res.send(err)
        }
    })
});
app.get('/getorder', (req, res, next) => {
    order.find({ status: 'IS Review' }, (err, data) => {
        if (!err) {
            res.send({
                data: data,
                status: 200
            });
        }
        else {
            res.send({
                message: 'error' + err,
                status: 404
            })
        }
    })
})

app.post('/updateStatus', (req, res, next) => {
    order.findById({ _id: req.body.id }, (err, data) => {
        if (data) {
            data.updateOne({ status: req.body.status }, (err, updatestatus) => {
                if (updatestatus) {
                    res.send({
                        message: "Status Update",
                        data: data,
                        status: 200
                    })
                } else {
                    res.send(err)
                }
            })
        } else {
            res.send({
                message: JSON.parse(err),
                status: 404
            })
        }
    })
})
app.post('/Ordercancel', (req, res, next) => {
    order.findById({ _id: req.body.id }, (err, data) => {
        if (data) {
            data.updateOne({ status: req.body.status }, (err, updatestatus) => {
                if (updatestatus) {
                    res.send({
                        message: "Order Cancel"
                    })
                } else {
                    res.send(err)
                }
            })
        } else {
            res.send({
                message: JSON.parse(err),
                status: 404
            })
        }
    })
})

app.get('/ordercancel', (req, res, next) => {
    order.find({ status: { $in: ["Order Cancel", "Order confirmed"] } }, (err, data) => {
        if (data) {
            res.send({
                data: data,
                status: 200
            })
        }
        else {
            res.send({
                message: err,
                status: 404
            })
        }

    })
})




server.listen(PORT, () => {
    console.log("Server is Running:", PORT);
});

