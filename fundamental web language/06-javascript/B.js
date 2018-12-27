let reverse = function(num){
    num = num.toString();
    num = num.split("");
    for (let index in num){
        num[index] = Number(num[index]);
    };
    num = num.sort(function(a,b){
        if(a<b){
            return 1;
        }else if(a>b){
            return -1;
        }else {
            return 0;
        }
    });

    return num;
}

console.log(reverse(12345));