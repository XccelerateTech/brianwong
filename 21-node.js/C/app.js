function text(n){
    let count = 0;
    let text = []; 
    while(count<n){
        let codeBreaker = require('./codeBreaker')
        text.push(codeBreaker());
        count++;
    }
    return text.join('');
}

console.log(text(5))