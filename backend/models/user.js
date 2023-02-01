const mongoose = require('mongoose');
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    fname: String,
    lname: String,
    phone: String,
    userType: {
        default: 'customer',
        type: String
    }
});


UserSchema.plugin(passportLocalMongoose);



const Profile = mongoose.model("Profile", UserSchema);


passport.use(Profile.createStrategy());

passport.serializeUser(Profile.serializeUser());
passport.deserializeUser(Profile.deserializeUser());

module.exports = Profile;