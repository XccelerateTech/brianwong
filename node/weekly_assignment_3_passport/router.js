const passport = require('passport');

module.exports = (express,note) =>{
    let router = express.Router();
    let username;

    router.post('/login', passport.authenticate('login'),(req,res)=>{
        username = req.user.username;
        let data = {
            redirect: true,
            redirectURL: '/index'
        }
        res.send(data)
    })

    router.post('/signin',passport.authenticate('signin'),(req,res)=>{
        username = req.user.username;
        let data = {
            redirect: true,
            redirectURL: '/index'
        }
        res.send(data)
    })

    router.get('/auth/facebook',passport.authenticate('facebook',{
        scope: ['user_frineds','manage_pages']
    }))

    router.get("/auth/facebook/callback",passport.authenticate('facebook',{
        failureRedirect: "/"
    }),(req,res)=>res.send({
        redirect: true,
        redirectURL: '/index'
    }));

    router.get('/index', async(req,res)=>{
        let noteList = await note.listNote();
        let list = {notes: noteList, user: username};
        res.render('hello',list);
    })

    router.get('/error', (req,res)=>{
        res.render('error');
    })

    return router;
}