import React from "react";
import { useForm } from "react-hook-form";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const url = `https://farns-warehouse.herokuapp.com/products`;

    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => result);
  };
  return (
    <div>
      <h1 className="text-center">Addding Products</h1>

      <div className="container">
        <div className="row">
          <div
            className="col col-lg-4 bg-secondary  p-3 shadow-sm rounded mx-auto my-4"
            style={{ width: "23%" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="mb-2"
                placeholder="Name"
                {...register("name", { required: true, maxLength: 20 })}
              />
              <input
                type="text"
                className="mb-2"
                {...register("rating")}
                placeholder="Rating"
              />
              <textarea
                className="mb-2"
                placeholder="Description"
                {...register("description")}
              />
              <input
                type="number"
                className="mb-2"
                {...register("price")}
                placeholder="Price"
              />
              <input
                type="number"
                className="mb-2"
                {...register("quantity")}
                placeholder="Quantity"
              />
              <input
                type="text"
                className="mb-2"
                {...register("supplier")}
                placeholder="Supplier"
              />
              <input
                type="text"
                className="mb-2"
                {...register("image")}
                placeholder="Photo URL"
              />
              <br />
              <input type="submit" className="btn btn-outline-warning" />
            </form>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
};

export default AddProducts;
