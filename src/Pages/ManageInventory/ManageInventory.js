import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `https://farns-warehouse.herokuapp.com/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = "Are you sure you want to delete ?";
    if (proceed) {
      fetch(`https://farns-warehouse.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => data);
      const remaining = products.filter((product) => product._id !== id);
      setProducts(remaining);
    }
  };
  return (
    <div>
      <h1 className="text-center">Manage Inventory </h1>
      {products.map((product) => (
        <p className="mx-2" key={product._id}>
          {product.name}
          <button
            className="mx-2 px-2 btn btn-outline-warning"
            onClick={() => handleDelete(product._id)}
          >
            Delete
          </button>
        </p>
      ))}
      <Link to="/addproduct" className="my-2 btn btn-outline-danger mx-2">
        Add new item
      </Link>
    </div>
  );
};

export default ManageInventory;
