let pg = require('pg');

let config = {
    user: 'chifungwong',
    database: 'fruits',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

client.connect();

async function trial(){
    await client.query('begin')
    // await client.query("select * from citrus where color = 'orange'", function(err, results) {
    //     if(err) {
    //         console.log(err);
    //     }
    //     console.log(results.rows); // result is returned as an array in which each row is an object 
    // })
    let insertValues = ['pineapple','yellow','sour']
    await client.query("insert into citrus (name,color,taste) values ($1,$2,$3)",insertValues,err=>{
        if(err){
            
            throw new Error(err);
        }
    });
    await client.query('commit');
    await client.end();
    
}

trial();