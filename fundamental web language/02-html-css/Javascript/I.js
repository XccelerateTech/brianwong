for(let num = 1; num <= 30;num++){
    if (num % 3 == 0 && num % 5 == 0){
        console.log("Hong Kong");
    }else if(num % 3 ==0){
        console.log("Hong");
    }else if (num % 5 == 0){
        console.log("Kong");
    }else{
        console.log(num);
    }

}