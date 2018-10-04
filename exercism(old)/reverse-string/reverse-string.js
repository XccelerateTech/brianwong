function reverse_str(str){
    str = str.split("");
    let reverse = [];
    str.forEach((char) => {
        reverse.unshift(char);
    })
    reverse = reverse.join("")
    return reverse;
};
 
module.exports = reverse_str;


