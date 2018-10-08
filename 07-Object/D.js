class Monster {
    constructor(options){
        this.health = 100;
        this.name = options.name;
    }

    wound(demage){
        this.health -= demage;
        if (this.health <= 0){
            console.log('monster dead');
        }
    }

}

function hero(monster){
    let demage = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
    monster.wound(demage);
}

let shark = new Monster({name:"shark"});
 
while(shark.health>0){
    console.log("kill one");
    hero(shark);
}