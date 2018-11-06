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
        .then(noteService.addNote('super'))
        .then(()=>{
            return noteService.listNote();
        })
        .then(result=>{
            expect(result).toEqual(['test','super']);
            done();
        })
        .catch((err)=>{
            done.fail(err);
        });
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
})