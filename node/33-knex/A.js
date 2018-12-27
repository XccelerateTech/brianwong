require('dotenv').config();
let fs = require('fs');
let CsvReadableStream = require('csv-reader')
let knex = require('../node_modules/knex')({
    client: 'pg',
    connection:{
        database: process.env.database,
        user: process.env.user,
        password:process.env.password
    }
})


var inputStream = fs.createReadStream(__dirname+'/record.csv', 'utf8');
let list = [];
 
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        list.push(row);
    })
    .on('end',async ()=>{
        knex.transaction(async (trx) => {
            for(let row of list){
                await trade(row[0],row[1],row[2],trx)
            }  
        })
    })



    

async function trade(action,fruit,quantity,trx){
    let rows = await trx.select('quantity').from('stock')
        .innerJoin('citrus','stock.citrus_id','citrus.id')
        .where('citrus.name',fruit)
        .groupBy('quantity');
    let stock = rows[0].quantity;
    if(action == 'SELL'){
        if(stock < quantity){
            throw new Error('not enough to sell');
        }
        await updateStock(action,fruit,quantity,trx);
    }else{
        await updateStock(action,fruit,quantity,trx);
    }    
}


async function updateStock(action,fruit,quantity,trx){
    if(action == 'BUY'){
        await trx('stock').whereIn('citrus_id ',function(){
            return this.select('id').from('citrus').where('name',fruit)
            })
        .increment('quantity',quantity);
        console.log(`buy ${quantity} ${fruit}`)
    }else{
        await trx('stock').whereIn('citrus_id ',function(){
            return this.select('id').from('citrus').where('name',fruit)
            })
        .decrement('quantity',quantity);
        console.log(`sell ${quantity} ${fruit}`);
    }
}

