const { products } = require("../config/data.js");

const getAllProducts = (req, res) => {
  res.json(products);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found to delete" });
  }

  products.splice(index, 1);
  // res.json({status: "deleted" });
  res.sendStatus(200);
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  const index = products.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "product not found" });
  }

  products[index] = { ...products[index], name, price };

  res.status(200).json(products);
};

const createProduct = (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.json(products);
};

const getOneProductWithParams = (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const myProduct = products.find((item) => item.id == id);
  if (!myProduct) return res.sendStatus(404); //res.status(404).json({message:'product not found'})
  res.json(myProduct);
};

const searchProducts = (req, res) => {
  console.log(req.query);
  const { name } = req.query;

  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });

  if (filtered.length === 0)
    return res.status(404).json({ message: "no product match your search" });

  res.json(filtered);
};

module.exports = {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getOneProductWithParams,
  searchProducts
};
