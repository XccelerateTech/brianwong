function Gambler(name, cash, bet, lose){
    this.cash = cash;
    this.bet = bet;
    this.lose = lose;
}

let loser_order = []

function casino (gambler){
    if (Math.random()>=gambler.lose){
        gambler.cash += gambler.bet;
    }else{
        gambler.cash -= gambler.bet
        if (gambler.cash <= 0){
            loser_order.push(gambler.name);
            gambler_list = gambler_list.filter(function(n){
                return n.name != gambler.name;
            })
        }
    }
}

let gambler_list = [
    {name: "jenny", cash:10000, bet:100, lose: 0.5},
    {name: "king", cash:13000, bet:400, lose: 0.6},
    {name: "brave", cash:33000, bet:500, lose: 0.6},
    {name: "dear", cash:80000, bet:4000, lose: 0.51},
    {name: "jes", cash:103000, bet:1700, lose: 0.5}
]

let num_gambler = gambler_list.length;

while (loser_order.length < num_gambler){
    gambler_list.forEach(function(n){
        casino(n);
    })
}

console.log(loser_order)