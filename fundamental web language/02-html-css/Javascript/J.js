let processor = function(num){
    if (num <=0 || typeof num != "number"){
        return "ERROR";
    }else {
        while(num <1000000){
            num *=10;
        }
        return num;
    }
}

console.log(processor("f"));
console.log(processor(43));
console.log(processor(1000003));


