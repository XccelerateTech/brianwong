let code = {1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",0:"j"};

let transform = function(num){
    num = num.split(''); 

    num.sort();

    let break_code = num.reduce(function(accu,next){
        return accu + code[next];
    },"");

    return break_code;
}

console.log(transform('8979043'));


