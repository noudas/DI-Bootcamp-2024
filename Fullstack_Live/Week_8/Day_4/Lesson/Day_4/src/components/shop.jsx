import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = () => {
      const productData = [
        { id: 1, name: "Iphone18", price: 1800 },
        { id: 2, name: "Xiaomi13", price: 100 },
      ];
      setProducts(productData);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>My Shop</h2>
      {products.map((item) => (
        <div key={item.id} style={styles.productCard}>
          <h2>{item.name}</h2>
          <p>Price: ${item.price}</p>
          <Link to={`/product/${item.id}`} style={styles.buyLink}>
            Buy Now
          </Link>
        </div>
      ))}
    </div>
  );
};

const styles = {
  productCard: {
    border: "1px solid #ccc",
    padding: "15px",
    margin: "10px",
    borderRadius: "5px",
    textAlign: "center",
  },
  buyLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Shop;
