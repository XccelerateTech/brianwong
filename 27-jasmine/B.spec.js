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

    
    it('obiwan\'s attack make anakin injured',()=>{
        spyOn(anakin,'injure');
        obiwan.attack(anakin);
        expect(anakin.injure).toHaveBeenCalled();
    })

    it('anakin\'s attack make obiwan injured',()=>{
        spyOn(obiwan,'injure');
        anakin.attack(obiwan);
        expect(obiwan.injure).toHaveBeenCalled();
    })

    it('anakin is dead in dual',()=>{
        spyOn(anakin,'dead');
        duel(obiwan,anakin);
        expect(anakin.dead).toHaveBeenCalled();
    })
})

