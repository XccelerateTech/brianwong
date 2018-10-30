let Computer = require('./computer');
 
class Referee extends Computer{
    constructor(){
        super();
        this.convertList = {
            'rock': -1,
            'paper': 0,
            'scissor': 1
        }
        this.complete = {input: false, computerDecision: false}
        
    
        this.on('input',(action)=>{
            this.playerChoice = action;
            this.complete.input = true;
            if(this.complete.input ==true && this.complete.computerDecision == true){
                this.emit('judge',this.convertList,this.playerChoice,this.compChoice)
            }
        })

        this.on('computerDecision',(action)=>{
            this.compChoice = action;
            this.complete.computerDecision = true;
            if(this.complete.input ==true && this.complete.computerDecision == true){
                this.emit('judge',this.convertList,this.playerChoice,this.compChoice)
            }
        })

        this.on('judge',(convertList, playerChoice, compChoice)=>{
            if(convertList[playerChoice]*convertList[compChoice] == -1){
                if(convertList[playerChoice]<convertList[compChoice]){
                    console.log('player wins')
                }else{
                    console.log('computer wins')
                }
            }else if(convertList[playerChoice]>convertList[compChoice]){
                console.log('player wins')
            }else if (convertList[playerChoice] == convertList[compChoice]){
                console.log('draw')
            }else{
                console.log('computer wins')
            }   
        })

    }
}

let game = new Referee;

game.input('rock');
