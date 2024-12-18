const knex = require("knex");
require("dotenv").config();

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const db = knex({
    client: "pg",
    connection: {
        host: PGHOST,
        port: PGPORT,
        user: PGUSER,
        password: PGPASSWORD,
        database: PGDATABASE,
        ssl: { rejectUnauthorized: false }
    }
});

module.exports = db;
