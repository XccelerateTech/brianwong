let pg =require('pg');

let client = new pg.Client(config);

let object = {
    query: async function(string, callback){
        await client.query(string,callback);
    }
}