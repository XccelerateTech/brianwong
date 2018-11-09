let Jedi = require('./starwars').Jedi
let Sith = require('./starwars').Sith
let duel = require('./starwars').duel



describe('star war asynchronous',()=>{
    it('Anakin is rescued by Darth Sidious',()=>{
        let obiwan = new Jedi("Obiwan Kenobi",70,700);
        let anakin = new Sith("Anakin Skywalker",100,1000);
        jasmine.clock().install()
        duel(obiwan,anakin);
        jasmine.clock().tick(5001);
        jasmine.clock().uninstall();
        expect(anakin.power).toEqual(90);
        expect(anakin.health).toEqual(800)
    })
})