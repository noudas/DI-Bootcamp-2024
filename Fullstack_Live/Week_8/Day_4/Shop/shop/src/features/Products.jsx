import { useState, useEffect } from "react";
import { Link } from "react-router";
import './Products.css'

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [addproduct, setAddProduct] = useState({
    name: "",
    price: "",
  });

  const createProduct = async (e) => {
    e.preventDefault();
    try {
      const name = e.target.elements["product-name"].value;
      const price = e.target.elements["product-price"].value;

      const res = await fetch("http://localhost:3001/products/");
      const data = await res.json();

      const id = data.length + 1;

      const newProduct = {
        id,
        name,
        price
      };

      await fetch("http://localhost:3001/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      setProducts((prevProducts) => [...prevProducts, newProduct]);

      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      const res = await fetch("http://localhost:3001/products/");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };



  return (
    <>
      <h2>Shop</h2>
      <div>
        <h2>Add Product</h2>
        <form onSubmit={createProduct}>
          <input
            type="text"
            placeholder="Product name"
            name="product-name"
            required
          />
          <input
            type="number"
            placeholder="Product price"
            name="product-price"
            required
          />
          <input type="submit" value="Add Product" />
        </form>
      </div>

      {products.map((item) => {
        return (
          <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <Link to={`/product/${item.id}`}>Buy Now</Link>
          </div>
        );
      })}
    </>
  );
};
export default Products;
