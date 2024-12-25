import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

const Product = (props) => {
  const [oroduct, setProduct] = useState({})
  const params = useParams();

  const getInfo = async () =>{
    try {
      const res = await fetch(`http://localhost:3001/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() =>{
    getInfo();
  },[])

  return (
    <>
      <h2>Product Page</h2>

      <p>{oroduct.id}</p>
      <h3>{oroduct.name}</h3>
      <p>{oroduct.price}</p>
      <Link to="/">Continue Shopping</Link>
    </>
  );
};
export default Product;
