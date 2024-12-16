const knex = require('knex')
require("dotenv").config()
const {PGHOST,PGPORT,PGUSER,PGDATABASE,PGPASSWORD} = process.env

const db = knex({
    client: 'pg',
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        database: PGDATABASE, 
        password: PGPASSWORD,
        ssl: {rejectUnauthorized:false},
    },
});

async function getVersion() {
    const result = await db.raw("select version()")
    console.log(result.rows);
    
}
getVersion()

db("products")
.select("name","price")
.where("id",3)
.then((data) =>{
    console.log(data);
})

db.raw("select id,name,price from products where id = ?", [1])
.then((data) =>{
    console.log(data.rows);
    
})
