import passport from 'passport';
import passportJwt from 'passport-jwt'
import config from './config';
import users from './users';

const ExtractJwt = passportJwt.ExtractJwt;


export default () => {
    const strategy = new passportJwt.Strategy({
        secretOrKey:config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },(payload,done)=>{
        const user = users.find((candidate)=>{
            return candidate.id === payload.id
        })

        if(user){
            return done(null,{id:user.id})
        }else{
            return done(new Error('User not found'),null)
        }
    })

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