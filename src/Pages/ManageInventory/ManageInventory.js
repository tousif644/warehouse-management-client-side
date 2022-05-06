import React, { useEffect, useState } from "react";

const ManageInventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/products`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = (id) => {
    const proceed = "Are you sure you want to delete ?";
    if (proceed) {
      fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
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
    </div>
  );
};

export default ManageInventory;
