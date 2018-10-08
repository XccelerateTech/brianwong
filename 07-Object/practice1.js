//creat 10 student instance + print name and age
let record = [
    {name: kathy, age: 12},
    {name: james, age: 13},
    {name: fin, age: 13},
    {name: alex, age: 14},
    {name: door, age: 16},
    {name: orange, age: 11},
    {name: jake, age: 9},
    {name: kim, age: 10},
    {name: nany, age: 10},
    {name: yoyo, age: 10},

]

class Student {
    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.gender = options.gender;
        this.grade = options.grade;
    }
}




