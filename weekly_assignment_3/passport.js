const passport = require('passport');
const LocalStrategy = require('passport-local');
require('dotenv').config();
const knex = require('knex')({
    client:'postgresql',
    connection:{
        database:process.env.database,
        user: process.env.user,
        password: process.env.password
    }
});



module.exports = (app)=>{
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new LocalStrategy(
        async (username,password,done) => {
            try{
                let users = await knex('userlist').where({
                    username: username,
                    password: password
               });
                if(users.length === 0){
                    return done(null,false,{message: 'incorrect credentials'});
                }else{
                    return done(null,username);
                }
            }catch(err){
                return done(err);
            }
        }
    ))

 
}