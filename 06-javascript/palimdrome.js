let palimdrome = function(str){
    str_rev = str.split("").reverse().join("");

    if (str_rev == str){
        return true;
    }else{
        return false;
    }
}


console.log(palimdrome("bob")) ;
console.log(palimdrome("brian"));