var mongoose = require("mongoose");

let dbURI = "mongodb+srv://mobeengrs786:mobeengrs786@cluster0.dh1su.mongodb.net/hellotest?retryWrites=true&w=majority"

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", function () {
    console.log("Mongoose is connected");
})


mongoose.connection.on("disconnected", function () {
    console.log("Mongoose is disconnected");
    process.exit(1);
})

mongoose.connection.on("error", function (err) {
    console.log("Mongoose connection error :", err);
    process.exit(1);
});

process.on("SIGINT", function () {
    console.log("App is terminated");
    mongoose.connection.close(function () {
        console.log('Mongoose default connection closed');
        process.exit(0);
    });
});


var userSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "phone": String,
    "role": { "type": String, "default": "user" },
    "createdOn": { "type": Date, "default": Date.now },
    "activeSince": Date
});

var userModel = mongoose.model("users", userSchema);

var adminSchema = new mongoose.Schema({
    "productname": String,
    "email": String,
    "price": Number,
    "productimages": [],
    "activeStatus": String,
    "stock": Number,
    "description": String
})

var adminModel = mongoose.model("admin", adminSchema);

var checkoutformSchema = new mongoose.Schema({
    "name": String,
    "email": String,
    "phonenumber": String,
    "address": String,
    "status": String,
    "orders": Array,
    "totalPrice": String,
    "createdOn": { "type": Date, 'default': Date.now }
})
var order = mongoose.model('order', checkoutformSchema);






module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    order: order
   
}