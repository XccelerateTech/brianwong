let keyword = {6:"a",1:"b",7:"d",4:"e",3:"i",2:"l",9:"m",8:"n",0:"o",5:"t"};

let codeBreaker = function(num){
    if (typeof num == "number" && num >=100 && num <=999999){
        let num_array = num.toString().split("");
        let answer = []
        for(let str_num of num_array){
            for(let key in keyword){
                if(str_num == key){
                    answer.push(keyword[key]);
                }
            }
        }
        return  answer.join('');
    }
    
}

console.log(codeBreaker(34553));