const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
require('dotenv').config();
const knex = require('knex')({
    client:'postgresql',
    connection:{
        database:process.env.database,
        user: process.env.user,
        password: process.env.password
    }
});

const brcypt = require('./bcrypt');



module.exports = (app)=>{
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('login',new LocalStrategy(
        async (username,password,done) => {
            try{
                let users = await knex('userlist').where({
                    username: username,
               });
               
                if(users.length === 0){ //if there is no such username
                    return done(null,false,{message: 'invalid credentials'});
                }else{
                    let user = users[0];
                    let result = await brcypt.checkPassword(password,user.password)
                    console.log(result)
                    if(result){ //if the password is matched
                        return done(null,user);
                    }else{
                        return done(null,false,{message: 'invalid credentials'});
                    }
                } 
            }catch(err){
                return done(err);
            }
        }
    ))

    passport.use('signin', new LocalStrategy(
        async (username,password,done)=>{
            try{
                let hash = await brcypt.hashPassword(password);
                console.log(hash)
                let users = await knex('userlist').where({
                    username: username,
                    password: hash
               });
               if(users.length === 0){
                   let newUser = {
                    username: username,
                    password: hash
                   };
                    let idRow = await knex('userlist').insert(newUser).returning('id')
                    newUser.id = idRow[0]
                    return done(null,newUser)
               }
               return done(null,false,{message:'the user already exists'})
            }catch(err){
                return done(err)
            }
        })
    )
    

    passport.serializeUser((user,done)=>{
        return done(null,user.id)
    })

    passport.deserializeUser(async(id,done)=>{ //sign in using user's id
        let users = await knex('userlist').where({id:id});
        if(users.length === 0){
            return done(new Error(`Wrong user id ${id}`));
        }else{
            let user = users[0];
            return done(null,user)
        }
    })

 
}