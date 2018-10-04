let code = {1:"a",2:"b",3:"c",4:"d",5:"e",6:"f",7:"g",8:"h",9:"i",0:"j"};

let transform = function(num_str){
    num_str = num_str.split('');
    
    num = num_str.map(function(n){
        return Number(n);
    });

    num.sort();

    let break_code = num.map(function(n){
        return code[n];
    })

    break_code = break_code.join("");

    return break_code;
}

console.log(transform('213'));