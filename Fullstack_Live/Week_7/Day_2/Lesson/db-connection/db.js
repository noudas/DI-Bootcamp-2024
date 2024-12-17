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

// async function getVersion() {
//   const result = await db.raw("select version()");
//   console.log(result.rows);
// }
// getVersion();

// db("products")
//   //   .where("id", 3)
//   .orderBy("name")
//   .select("name", "price", "id")
//   .then((data) => {
//     console.log(data);
//   });

//   db.raw('select id,name,price from products where id = ?',[1])
//   .then((data) => {
//     console.log(data.rows);
//   });

/** insert */

// db("products")
//   .insert(
//     [
//       {
//         name: "iphone17",
//         price: 777,
//       },
//       {
//         name: "iphone18",
//         price: 818,
//       },
//     ],
//     ["id"]
//   )
//   .then((data) => {
//     console.log(data);
//   });

/** update */
// db("products")
//   .update({ name: "samsung s24" }, ["id", "name"])
//   .where({ id: 3 })
//   .then((data) => {
//     console.log(data);
//   });

/** delete */
// db("products")
//   .del()
//   .where({ id: 3 })
//   .returning("*")
//   .then((data) => {
//     console.log(data);
//   });

const test = async () => {
  try {
    const trx = await db.transaction();

    const pdoduct1 = await db("products")
      .insert({ name: "ccc", price: 111 }, ["id"])
      .transacting(trx);

    console.log("product 1 =>", pdoduct1);

    const pdoduct2 = await db("products")
      .insert({ name: "ddd", price: 222 }, ["id"])
      .transacting(trx);

    console.log("product 2 =>", pdoduct2);

    await trx.commit();

  } catch (error) {
    console.log(e);
    await trx.rollback();
  }
};
test()
