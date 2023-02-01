const express = require("express");
const router = express.Router();
const passport = require('passport');
const Profile = require('../models/user');
const userAuth = require('../helpers/auth');

router.route('/register/admin').post(function (req, res) {
    Profile.register({username: req.body.username, fname: req.body.fname, lname: req.body.lname, userType: "admin", phone: req.body.phone}, req.body.password, function(err, user){
        if (err){
            console.log(err);
            res.json({message: 'Error'})
        } else {
            passport.authenticate("local")(req, res, function(){
                res.json({data: user});
            });
        }
    });
});

router.route('/register/customer').post(function (req, res) {
    Profile.register({username: req.body.username, fname: req.body.fname, lname: req.body.lname, phone: req.body.phone}, req.body.password, function(err, user){
        if (err){
            console.log(err);
            res.json({message: 'Error'})
        } else {
            passport.authenticate("local")(req, res, function(){
                res.json({data: user});
            });
        }
    });
});


router.route('/login/admin').post(function (req, res) {

    // let checkUserType = async () => {
    //     let profile = await Profile.findOne({email: req.body.username}).exec();
    //     return profile.userType;
    // }
    // let userType;

    // checkUserType().then((result) => {
    //     userType = result;
    // });

    Profile.findOne({username: req.body.username}, function(err, result) {
        console.log(result);

        let user = new Profile({
            username: req.body.username,
            password: req.body.password,
            userType: result.userType
        });

    // passport.authenticate(user,)
    
        req.login(user, function(err){
            if (err) {
                console.log(err);
            } else {
                passport.authenticate("local")(req, res, function(err, user, info){
                    console.log(user);
                    res.json({data: user});
                });
            }
        });
    })


});


router.route('/authenticate').post(userAuth.auth(), async (req, res) => {
    console.log(req.user);
    res.status(200).json({message: "True"});
});





module.exports = router;