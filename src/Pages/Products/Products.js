import React, { useEffect, useState } from "react";
import "./Products.css";
import Product from "../Product/Product";
const Products = () => {
  //state
  const [products, setProducts] = useState([]);

  //hook
  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, []);

  const p = products.slice(0,6);
  return (
    <div>
      <div className="container-fluid" id="products">
        <h1 className="text-center my-3">Featured Products</h1>
        <div className="container">
          <div className="row row-cols-lg-3">
            {p.map((product) => (
              <Product key={product._id} products={product}></Product>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
