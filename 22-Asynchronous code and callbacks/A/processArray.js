var myArray = [4, 8, 2, 7, 5];

function processArray(array,callback){
    let list = []
    array.forEach(element => {
        list.push(callback(element))
    });
    return list
}
console.log(processArray(myArray, function(a) {
    return a * 2;
}))
// [ 8, 16, 4, 14, 10 ]



var myArray = [7, 8, 9, 1, 2];
console.log(processArray(myArray, function (a) {
    return a + 5;
}))
// [ 12, 13, 14, 6, 7 ]

