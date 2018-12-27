let countChar = function(word,char){
    word = word.toLowerCase();
    char = char.toLowerCase();
    let count = 0;
    for (let val of word){
        if(char == val){
            count++;
        }
    }
    console.log(count);
}
countChar("fizzbuzz","z");
countChar("Fancy fifth fly aloof","f");