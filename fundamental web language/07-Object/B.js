function Player(name, health){
    this.name = name;
    this.health = health;
    this.attack = function(opponent) {
        opponent.health = opponent.health-10
    }
}

let pon = new Player("pon",200);
let raymond = new Player("raymond",200);
let row_count_player1 = 0;
let row_count_player2 = 0;


function turn(player1,player2){
    if (Math.random()>.5){
        player1.attack(player2);
        row_count_player1++;
        row_count_player2 = 0;
    }else if (Math.random()<=.5){
        player2.attack(player1);
        row_count_player1 = 0;
        row_count_player2++;
    }
}

Player.prototype.heal = function(){
    this.health = this.health + 5;
}


while (pon.health >0 && raymond.health>0){
    if (row_count_player1 == 3){
        pon.heal();
        row_count_player1 = 0; 
    }else if (row_count_player2 ==3){
        raymond.heal();
        row_count_player2 = 0;
    }
    turn(pon,raymond);
    
}

console.log(`Pon: ${pon.health}`);
console.log(`Raymond: ${raymond.health}`);

