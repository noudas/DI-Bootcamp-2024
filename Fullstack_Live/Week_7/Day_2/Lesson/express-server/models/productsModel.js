const { db } = require("../config/data.js");

const getAllProductsFromDB = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

module.exports = {
  getAllProductsFromDB,
};
