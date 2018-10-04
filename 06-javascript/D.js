let report = [45,35,54,78,85,95]


let average = report.reduce(function(accumulator,num){
    return accumulator + num/report.length;
},0);

console.log(average)