const knex = require("knex");
require("dotenv").config();

// Do not expose your Neon credentials to the browser

const { PGHOST, PGPORT, PGUSER, PGPASSWORD, PGDATABASE } = process.env;

const db = knex({
  client: "pg",
  connection: {
    host: PGHOST,
    port: PGPORT,
    user: PGUSER,
    database: PGDATABASE,
    password: PGPASSWORD,
    ssl: { rejectUnauthorized: false },
  },
});


const products = [
  { id: 101, name: "Product 101", price: 100 },
  { id: 201, name: "Product 201", price: 200 },
  { id: 301, name: "Product 301", price: 300 },
];

const users = [
  { name: "John", email: "jjj@gamil.com" },
  { name: "Anne", email: "aaa@gamil.com" },
  { name: "Marry", email: "mmm@gamil.com" },
];

module.exports = {
  products,
  users,
  db
};
