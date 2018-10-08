class Person{
    constructor(options){
        this.name = options.name;
        this.age = options.age
    }
}

const james = new Person({name: "James", age: 25});


console.log(james.age);

