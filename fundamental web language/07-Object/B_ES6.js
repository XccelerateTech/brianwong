class Player {
    constructor(options){
        this.name = options.name;
        this.health = options.health;
    }

    attack(oppenent){
        oppenent.health -= 10; 
    } 
}

let pon = new Player({name:"pon",health:"200"});
let raymond = new Player({name:"raymond",health:"200"});
let attack_row_pon = 0;
let attack_row_raymond = 0;

Player.prototype.heal = function(){
    this.health += 5;
}

while(pon.health > 0 && raymond.health>0){
    if (attack_row_pon == 3){
        pon.heal();
        attack_row_pon = 0;
        console.log("pon heal")
    }else if (attack_row_raymond == 3){
        raymond.heal();
        attack_row_raymond = 0;
        console.log("raymond heal")

    }

    if (Math.random()>.5){
        pon.attack(raymond);
        console.log("pon won");
        attack_row_pon++;
        attack_row_raymond = 0;

    }else{
        raymond.attack(pon);
        console.log("raymond won");
        attack_row_raymond++;
        attack_row_pon = 0;

    }
}


if (pon.health <= 0){
    console.log(raymond.name);
}else if (raymond.health <=0){
    console.log(pon.name);
}

