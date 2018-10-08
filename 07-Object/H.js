class Fly{
    constructor(type){
          this.type = type
    }
    fly(){
        console.log(`A ${this.type} can fly`);
    }
}

 class Swim{
    constructor(type){
        this.type = type
  }
    swim(){
        console.log(`A ${this.type} can swim`);
    }
 }

 class LayEgg{
    constructor(type){
        this.type = type
  }
    lay_egg(){
        console.log(`A ${this.type} can lay egg`);
    }
 }

 class FeedMilk{
    constructor(type){
        this.type = type
  }
    feed_milk(){
        console.log(`A ${this.type} feeds milk`);
    }
 }

 class Bird{
     constructor(){
         this.fly = new Fly("bird");
         this.Lay_egg = new LayEgg("bird");
     }

     can_fly(){
         return this.fly.fly();
     }
    
 }

 class Bat{
     constructor(){
        this.fly = new Fly('Bat');
        this.feed_milk = new feedMilk('Bat');
     }
 }


 class Whale{
    constructor(){
       this.swim = new Swim('Whale');
       this.feed_milk = new feedMilk('whale');
    }
}

class Fish{
    constructor(){
        this.swim = new Swim();
        this.lay_egg = new LayEgg();
     }
}

let myBrid = new Bird();
myBrid.can_fly();



