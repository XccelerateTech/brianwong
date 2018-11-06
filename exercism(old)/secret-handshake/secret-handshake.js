class SecretHandshake{
    constructor(num){
     
        if(typeof num != 'number'){
            throw new Error('Handshake must be a number')
        }
        this.directory = {
            0: 'wink',
            1: 'double blink',
            2: 'close your eyes',
            3: 'jump',
        }

        this.commands = function(){
            let num_arr = []
            let store_code = num
            loop: while(store_code > 0){
                let exp = Math.floor(Math.log(store_code)/Math.log(2)); //transform num into an array of exp of 2
                store_code = store_code - Math.pow(2,exp)
                if(exp<5){
                    num_arr.unshift(exp);
                }
                if (store_code == 1){ 
                    num_arr.unshift(0);
                    break loop;
                }
            }
            if(num_arr.indexOf(4) != -1){ //binary 10000: code of reverse
                num_arr.splice(num_arr.indexOf(4),1)
                num_arr = num_arr.reverse();
            }

            let handshake_list = num_arr.map(item =>{ //translate
                return this.directory[item];
            })

            return handshake_list
        }
    }

}


module.exports = SecretHandshake