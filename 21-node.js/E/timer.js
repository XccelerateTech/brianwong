let EventEmitter = require('events');

class Timer extends EventEmitter{
    constructor(number){
        super(); 
        let interval;
        this.second = number;
        this.on('tick',function(data){
            console.log(data);
        })
        this.on('start',()=>{
            interval = setInterval(()=>{
                this.second--
                if(this.second == 4){
                    this.emit('pause')
                }
                this.tick(this.second);
                
            },1000);
        });
        this.on('pause',()=>{
            clearInterval(interval);
        });
        this.on('stop',()=>{
            clearInterval(interval);
            this.second = number;
        })

        
    }

    tick(second){
        if(second>0){
            this.emit('tick',second)
        }else if(second == 0){
            this.emit('tick','kaboom')
        }
    }

    
}


module.exports = {
    start: function(){
        let timer = new Timer(10);
        timer.emit('start');
    },
    pause: function(){
        timer.emit('parse');
    },
    stop: function(){
        timer.emit('stop');
    }
}

