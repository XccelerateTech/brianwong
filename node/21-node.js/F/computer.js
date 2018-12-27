let Player = require('./player')
class Computer extends Player{
    constructor(){
        super();
        let decisions = ['rock','paper','scissor'];
        this.on('input',()=>{
            this.action(decisions)
        })
    }

    action(array){
        let random = Math.floor(Math.random()*3);
        let decision = array[random];
        this.emit('computerDecision',decision);
    }
}

module.exports = Computer;


