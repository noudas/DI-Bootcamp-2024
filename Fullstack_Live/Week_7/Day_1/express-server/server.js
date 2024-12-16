const express = require("express");
const cors = require("cors");
const { products } = require("./config/data.js");

// console.log(products);

const app = express();

app.use(cors());
// console.log(__dirname + "/public");
app.use("/", express.static(__dirname + "/public"));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`run on ${PORT}`);
});

/**
 * app.get
 * app.post
 * app.put
 */
const users = [
  { name: "John", email: "jjj@gamil.com" },
  { name: "Anne", email: "aaa@gamil.com" },
  { name: "Marry", email: "mmm@gamil.com" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

/**
 * GET: get data from server
 * POST: create new data
 * PUT: modify/update data
 * DELET: deleting data
 */

/** CRUD
 * C - Create - POST
 * R - Read - GET
 * U - Update - PUT
 * D - Delete - DELETE
 */

/**
 * GET - /api/products app.get()
 * POST - /api/products app.post()
 * PUT - /api/products app.put()
 * DELETE - /api/products app.delete()
 */

/**
 * POST - /api/products app.post()
 * PUT - /api/products app.put()
 * DELETE - /api/products app.delete()
 */

// form data
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found to delete" });
  }

  products.splice(index, 1);
  // res.json({status: "deleted" });
  res.sendStatus(200)
});

app.put("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products[index] = { ...products[index], name, price };

  res.status(200).json(products);
});

app.post("/api/products", (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.json(products);
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myProduct = products.find((item) => item.id == id);
  if (!myProduct) return res.sendStatus(404); //res.status(404).json({message:'product not found'})
  res.json(myProduct);
});

app.get("/api/search", (req, res) => {
  console.log(req.query);
  const { name } = req.query;

  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filtered.length === 0)
    return res.status(404).json({ message: "no product match your search" });

  res.json(filtered);
});
