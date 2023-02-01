const passport = require('passport');



module.exports.auth = () => {
    return (req, res, next) => {
        passport.authenticate('local', (error, user, info) => {
            if(error) {
                console.log(error);
                res.json({message: error});
            } else {
                req.login(user, function (error) {
                    if (error) {
                        return next(error);
                    } else {
                        next();
                    }
                });
            }
        })(req, res, next);
    }
};

module.exports.isLoggedIn = (req, res, next) => {
    if(req.isAuthenticated()) {
        return next()
    } else {
        return res.json({message: "Not Authenticated"});
    }
};

