let pg =require('pg');
let fs = require('fs');
let CsvReadableStream = require('csv-reader');

let config = {
    user: 'chifungwong',
    database: 'fruits',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

let client = new pg.Client(config);


var inputStream = fs.createReadStream(__dirname+'/record.csv', 'utf8');
let list = [];
 
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        list.push(row);
    })
    .on('end',async (data)=>{
        await client.connect();
        await client.query('begin');
        try{
            for(let row of list){
                await trade(row[0],row[1],row[2]);
            }
            await client.query('commit');
        }catch(err){
            console.log(err)
            await client.query('rollback')
            console.log('rollback')
        }
        client.end();
    })


    async function trade(action,citrus,quantity){
        if(action == 'SELL'){
            let value = [citrus]
            let result = await client.query("SELECT quantity FROM stock INNER JOIN citrus on stock.citrus_id = citrus.id WHERE citrus.name = $1;",value)
            if(result.rows[0].quantity < quantity){
                throw new Error('not enough to sell')
            }
            await updateStock(action,citrus,quantity)
        }else{
            await updateStock(action,citrus,quantity)
        }
    }
    




async function updateStock(action,citrus,quantity){ 
    if(action == 'BUY') {
        operator = '+'
        let values = [quantity,citrus];
        await client.query(`UPDATE stock SET quantity = quantity ${operator} $1
            FROM citrus
            WHERE stock.citrus_id = citrus.id AND name = $2`,values)
        console.log(`buy ${quantity} ${citrus}`)
    }else{
        operator = '-'
        let values = [quantity,citrus];
        await client.query(`UPDATE stock SET quantity = quantity ${operator} $1
            FROM citrus
            WHERE stock.citrus_id = citrus.id AND name = $2`,values)
        console.log(`sell ${quantity} ${citrus}`)
        }
}



