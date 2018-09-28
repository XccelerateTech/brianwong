let calculator = function(operation,val1,val2){
    switch(operation){
        case "+":
            console.log(val1+val2);
            break;
        case "-":
             console.log(val1-val2);
             break;
        case "*":
             console.log(val1*val2);
             break;
        case "/":
             console.log(val1/val2);
             break;
        default: 
            throw new Error ('Please enter an operator');
    }
}
calculator('+', 5, 9) // 14
calculator('-', 7, 3) // 4
calculator('*', 5, 5) // 25
calculator('/', 9, 3) // 3

