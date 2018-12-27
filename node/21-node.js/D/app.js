let Timer = require('./timer');

const timer = new Timer(10);

timer.on('tick',function(data){
    console.log(data);
})



setInterval(()=> timer.tick(),1000);
