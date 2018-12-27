const EventEmitter = require('events');

class Player extends EventEmitter{
    constructor(){
        super();
    }
    
    input(action){
        this.emit('input',action);
    }
}

module.exports = Player;
