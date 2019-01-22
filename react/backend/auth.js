const passport = require('passport');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;
const config = require('./config');
const users = require( './users');


module.exports =  () => {
    const strategy = new JwtStrategy({
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },(payload,done)=>{
        const user = users.find((candidate)=>{
            return candidate.id === payload.id
        })

        if(user){
            return done(null,{id:user.id})
        }else{
            console.log('authenication fail')
            return done(new Error('User not found'),null)
        }
    });

    passport.use(strategy)

    return {
        initialize: function(){
            return passport.initialize();
        },
        authenticate: function(){
            return passport.authenticate('jwt',config.jwtSession)
        }
    }
}