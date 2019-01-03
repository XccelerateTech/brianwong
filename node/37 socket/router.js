module.exports = (express) => {
    const router = express.Router();
    
    router.get('/',(req,res)=>{
        res.render('index',{web:'index'})
    })

    router.get('/admin',(req,res)=>{
        let obj = {
            key: 'key',
            web: 'admin'
        }
        res.render('admin',obj)
    })

    router.post('/room')
    
    return router
}

