require('dotenv').config();

const knex = require('knex')({
    client: 'postgresql',
    connection: {
      database: process.env.database,
      user:     process.env.user,
      password: process.env.password
    }
})


class NoteService{

    constructor(filename){
        this.filename = filename;
        this.notes = [];
        this.listNotePromise = this.listNote()
    }

    listNote(){
        return knex.select('text').from('note')
        .then(rows=>{
            this.notes = rows.map(note=>{
                return note.text;
            })
            return rows.map(note=>{
                return note.text;
            });
        })
    }
  
    addNote(note){
        return knex.transaction(async trx=>{
            let id;
            let rows = await trx.select('id').from('note');
            if(rows != []){
                id = rows.length;
            }else{
                id = 0;
            }
            await trx('note').insert({id:id,text:note})
        })
    }

    deleteNote(index){
        return knex.transaction(async trx=>{
            await trx('note').del().where('id',index);
        })
    }
}

module.exports = NoteService;
