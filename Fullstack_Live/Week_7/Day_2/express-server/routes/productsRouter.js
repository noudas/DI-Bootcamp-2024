const { Router } = require("express");
const {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
  getOneProductWithParams,
  searchProducts,
} = require("../controllers/productsController.js");

const router = Router();

router.get("/api/products", getAllProducts);
router.delete("/api/products/:id", deleteProduct);
router.put("/api/products/:id", updateProduct);
router.post("/api/products", createProduct);
router.get("/api/products/:id", getOneProductWithParams);
router.get("/api/search", searchProducts);

module.exports = {
  productsRouter: router,
};
