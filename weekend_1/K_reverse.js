let key = {"a":6,"b":1,"d":7,"e":4,"i":3,"l":2,"m":9,"n":8,"o":0,"t":5};
// let key = {
//     "a":1,"b":2,"c":3,"d":4,"e":5,"f":7,"g":8,"h":9,"i":10,"j":11,"k":12,"l":13,
//     "m":14,"n":15,"o":16,"p":17,"q":18,"r":19,"s":20,"t":21,"u":22,"w":23,"v":24,
//     "y":24,"z":25
// }

function translate(word){
    word = word.split("");
    let anwser = [];
    for(let char of word){
        if (key[char] != undefined){
            anwser.push(key[char]);
        }else{
            return "ERROR";
        }
    }
    return Number(anwser.join(""));
}

console.log(translate("amnote"));
console.log(translate("zdfaff"));
