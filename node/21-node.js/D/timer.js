let EventEmitter = require('events');

class Timer extends EventEmitter{
    constructor(number){
        super(); 
        this.second = number;
    }


    tick(){
        this.second--;
        if(this.second>0){
            this.emit('tick',this.second)
        }else if(this.second == 0){
            this.emit('tick','kaboom')
        }
    }
}

module.exports = Timer;

