var express = require("express");
var bcrypt = require("bcrypt-inzi")
var jwt = require('jsonwebtoken');
var { userModel, otpModel } = require("../dbrepo/models");
var { SERVER_SECRET } = require("../core/index");
var api = express.Router();


api.post("/signup", (req, res, next) => {

    if (!req.body.name
        || !req.body.email
        || !req.body.password
        || !req.body.phone) {

        res.status(403).send(`
            please send name, email, passwod, phone and  in json body.
            e.g:
            {
                "name": "Mohammad Mobeen",
                "email": "mobeengrs786@gmail.com",
                "password": "1234",
                "phone": "0303-2160288",
                
            }`)
        return;
    }
    userModel.findOne({ email: req.body.email }, function (err, doc) {
        if (!err && !doc) {
            bcrypt.stringToHash(req.body.password).then(function (hash) {

                var newUser = new userModel({
                    "name": req.body.name,
                    "email": req.body.email,
                    "password": hash,
                    "phone": req.body.phone
                })
                newUser.save((err, data) => {
                    if (!err) {
                        res.send({
                            message: "SignUp Successfully goto Login Page",
                            status: 200
                        });
                    }
                    else {
                        console.log(err);
                        res.send({
                            message: "User Create Error " + JSON.stringify(err),
                            status: 500
                        });
                    }
                });


            });
        } else if (err) {
            res.send({
                message: "DB ERROR",
                status: 500
            });
        } else {
            res.send({
                message: "User Already Exist",
                status: 409
            });
        }
    });
});

api.post("/validemail", (req, res, next) => {

    if (
        !req.body.email
    ) {

        res.status(403).send(`
            please send name, email, passwod, phone and  in json body.
            e.g:
            {
                "name": "Mohammad Mobeen",
                "email": "mobeengrs786@gmail.com",
                "password": "1234",
                "phone": "0303-2160288",
                
            }`)
        return;
    }
    userModel.findOne({ email: req.body.email }, function (err, doc) {
        if (!err) {
            if (doc) {
                res.send({
                    status: 200,
                    isFound: true
                })
            } else {
                res.send({
                    status: 200,
                    isFound: false
                })
            }
        } else {
            res.send({
                status: 500
            })
        }
    });
});

api.post("/login", (req, res, next) => {

    if (!req.body.email || !req.body.password) {

        res.status(403).send(`
            please send email and passwod in json body.
            e.g:
            {
                "email": "mobeengrs786@gmail.com",
                "password": "1234",
            }`)
        return;
    }

    userModel.findOne({ email: req.body.email },
        function (err, user) {
            if (err) {
                res.status(500).send({
                    message: "an error occured: " + JSON.stringify(err)
                });
            } else if (user) {
                bcrypt.varifyHash(req.body.password, user.password).then(isMatched => {
                    if (isMatched) {
                        console.log("matched", user);

                        var token =
                            jwt.sign({
                                id: user._id,
                                name: user.name,
                                email: user.email,
                                role: user.role
                            }, SERVER_SECRET)

                        res.cookie('jToken', token, {
                            maxAge: 86400000,
                            httpOnly: true
                        });

                        res.send({
                            status: 200,
                            message: "login success",
                            user: {
                                name: user.name,
                                email: user.email,
                                phone: user.phone,
                                gender: user.gender,
                                role: user.role
                            }
                        });


                    } else {
                        console.log("not matched");
                        res.send({
                            message: "Incorrect password or email"
                        })
                    }
                }).catch(e => {
                    console.log("error: ", e)
                })

            } else {
                res.send({
                    message: "user not found"
                });
            }
        });
});

api.post("/logout", (req, res, next) => {
    res.cookie("jToken", "", {
        maxAge: 86_400_000,
        httpOnly: true
    });
    res.send({
        status: 200,
        message: "Logout"
    });
});
module.exports = api;