let NoteService = require('../NoteService')
let fs = require('fs')

describe('Testing NoteService',function(){
    beforeEach(()=>{
        if(fs.existsSync('test.json')){
            fs.unlinkSync('test.json');
        }
        fs.writeFileSync('test.json','[]')
    });



    it('list our notes using listNote()',function(done){
        const noteService = new NoteService('test.json');
        noteService.listNote()
        .then((result) => {
            expect(result).toEqual([]);
            done();
        })
        .catch((err) =>{
            done.fail(err);
        })
    })

    it('add a note using addNote()',(done)=>{
        const noteService = new NoteService('test.json');
        noteService.addNote('test')
        .then(() => {
            return noteService.listNote();
        })
        .then(result=>{
            expect(result).toEqual(['test']);
            done();
        })
        .catch((err)=>{
            done.fail(err);
        });
    })

    it('should be able to add more than one note using addNote()',done =>{
        const noteService = new NoteService('test.json');
        noteService.addNote('test')
        .then(async ()=>{
            await noteService.addNote('super')
            let list = await noteService.listNote();
            expect(list).toEqual(['test','super']);
            done();
        })
    
        .catch( async err => {
            let list = await noteService.listNote()
            console.log(list);
            done.fail(err);
        })
    })

    it('add notes before listing notes,while having the previos notes',done=>{
        const noteService = new NoteService('test.json');
        noteService.addNote('test').then(()=>{
            const noteService2 = new NoteService('test.json');
            return noteService2.addNote('test 2')
        })
        .then(()=>{
            return noteService.listNote();
        })
        .then((result)=>{
            expect(result).toEqual(['test','test 2'])
            done();
        })
        .catch(err => {
            done.fail(err);
        })
        .catch(err => {
            done.fail(err);
        })
        
    })

    it('delete note using deleteNote()', done=>{
        const noteService = new NoteService('test.json');
        noteService.addNote('deleteItem')
        .then(async ()=>{
            await noteService.deleteNote(0)
            let list = await noteService.listNote();
            expect(list).toEqual([]);
            done();
        })
       .catch(err => done.fail(err))
     })


    it('index changes when deleting items that are not the last one', done => {
        const noteService = new NoteService('test.json');
        noteService.addNote('test')
        .then(async ()=>{
            await noteService.addNote('super')
            await noteService.addNote('new')
            await noteService.deleteNote(0)
            await noteService.deleteNote(1)
            let list = await noteService.listNote();
            expect(list).toEqual(['super']);
            done();
        })
        .catch((err)=>{
            done.fail(err);
        });
    })
})