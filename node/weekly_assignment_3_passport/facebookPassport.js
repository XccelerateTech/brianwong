const passport = require('passport');
const FacebookStrategy = require('passport-facebook')
require('dotenv').config();

module.exports = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('facebook',new FacebookStrategy({
        clientID: process.env.FACEBOOD_APP_ID,
        clientSecret: process.env.FACEBOOD_CLIENT_SECRET,
        callbackURL:  `/auth/facebook/callback`,
    },(accessToken, refreshToken, profile, cb) =>{
        return cb(null,{profile:profile,accessToken:accessToken});
    }
    ))
}