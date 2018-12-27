class flyAnimal{
    constructor(){
        this.can_fly = true;   
    }
}

 class swimAnimal{
    constructor(){
        this.can_swim = true;
    }

 }

 class bird extends flyAnimal {
     constructor(){
         super();
         this.lay_egg = true;
     }
 }

 class whale extends swimAnimal{
    constructor(){
        super();
        this.feed_milk = true;
    }
 }

 class bat extends flyAnimal{
     constructor(){
         super();
         this.feed_milk = true;
     }
 }

 class fish extends swimAnimal{
    constructor(){
        super();
        this.lay_egg= true;
    }
}

let joke = new whale()

console.log(joke.can_swim);


