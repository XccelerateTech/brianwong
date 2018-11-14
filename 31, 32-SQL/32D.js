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

client.connect();


var inputStream = fs.createReadStream(__dirname+'/record.csv', 'utf8');
let list = [];
 
inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        list.push(row);
    })
    .on('end',async ()=>{
        for(let row of list){
            await trade(row[0],row[1],row[2]);
        }
        client.end();
    })
    

async function trade(action,citrus,quantity){
    try{
        await client.query('begin')
        let stock = await client.query(`select quantity from fruitshop where name = ${citrus}`,async (err,result)=>{
            if (err){
                return 'err';
            }else{
                console.log('done')
                return result[0].quantity;
            }
        })
        if(stock == 'err'){
            if(action == 'BUY'){
                await insertStock(citrus,quantity)
                console.log(stock)
            }else if(action == 'SELL'){
                await client.query('rollback')
                throw new Error('can\'t sell stock that is not available')
            }
        }else if(typeof stock == 'number'){
            if(action == 'BUY'){
                await buyStock(stock,citrus,quantity);
            }else if (action == 'SELL'){
                await sellStock(stock,citrus,quantity);
            }
        }
    }catch(err){
        throw new Error(err)
    }
}

async function insertStock(citrus,quantity){ //buy new fruits
    await client.query(`insert into fruitshop (name,quantity) values (${citrus},${quantity})`,async (err)=>{
        if(err){
            await client.query('rollback')
            throw new Error(err)
        }
    })
    await client.query("commit")
}
    
async function buyStock(stock,citrus,quantity){ // add stock for existing fruits
    await client.query(`update fruitshop set quantity = ${stock+quantity} where name = ${citrus}`,async (err)=>{
        if(err){
            await client.query('rollback')
            throw new Error(err)
        }
    })
    await client.query("commit");
}

async function sellStock(stock,citrus,quantity){ //remove stock from existing fruits
    await client.query(`update fruitshop set quantity = ${stock-quantity} where name = ${citrus}`,async (err)=>{
        if(err){
            await client.query('rollback')
            throw new Error(err)
        }
    })
    await client.query("commit");
}


