const redis = require('redis');

//default: host - 127.0.0.1  port 6379 
//you can add auth_pass into object for the login password
const client = redis.createClient() 

function timeSetJob(){
    setTimeout(getJob,5000)
}

function getJob(){
    client.rpop('messageQueue',(err,reply)=>{
        if(err){
            console.log(err);
            scheduleGetJob();
            return;
        }

        if(reply === null){
            console.log('No jobs here');
            scheduleGetJob();
            return ;
        }

        let job = JSON.parse(reply);
        console.log('Processing job, msg: ' + job.msg + ' date: ' + job.date); 
        setTimeout(function () {
            console.log('Job Done! Ready for a different job')
            scheduleGetJob();
        }, 10000);
    })
}





