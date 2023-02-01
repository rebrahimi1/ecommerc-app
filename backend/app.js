require('dotenv').config();
const path = require('path');
const express = require('express');
const createError = require('http-errors');
const bodyParser = require('body-parser');
const Mongoose = require('mongoose');
const passport = require("passport");
const session = require('express-session');
const cors = require('cors');

const app = express();


app.use(express.urlencoded({extended: true}));
app.use(cors(), express.json());
app.use("/images", express.static(path.join("backend/images")));


app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());

app.use(passport.session());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
})


Mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});

Mongoose.connection.on("error", err => {
    console.log("err", err)
});
  
Mongoose.connection.on("connected", () => {
  console.log("mongoose is connected...")
});

Mongoose.connection.on("disconnected", () => {
  console.log("mongoose is disconnected...")
});

// const profileRouter = require('./routes/user');
// const productRouter = require('./routes/tire');

const { routes } = require('./index');

app.use('/api/products', routes.productRouter);
app.use('/api/carts', routes.cartRouter);
app.use('/api/users', routes.userRouter);




module.exports = app;