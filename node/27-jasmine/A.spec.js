let Jedi = require('./starwars').Jedi
let Sith = require('./starwars').Sith
let duel = require('./starwars').duel

let obiwan;
let anakin;

beforeEach(()=>{
     obiwan = new Jedi("Obiwan Kenobi",70,700);
     anakin = new Sith("Anakin Skywalker",100,1000);
})

describe('starwar',()=>{
    it('duel',()=>{
        spyOn(obiwan,'attack');
        spyOn(anakin,'attack');

        duel(obiwan,anakin);
        expect(obiwan.attack).toHaveBeenCalled();
        expect(anakin.attack).toHaveBeenCalled();
    })
})