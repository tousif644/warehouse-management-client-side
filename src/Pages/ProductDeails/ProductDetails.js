import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "./../Hooks/useServiceDetails";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { serviceId } = useParams();
  const [services] = useServiceDetails(serviceId);

  return (
    <div>
      <div>
        <h3>
          <Link className="text-decoration-none fs-4 text-warning px-2" to="/">
            ← Back to home
          </Link>
        </h3>
      </div>
      <h2 className="text-center">
        Product Details
        <hr className="w-25 me-auto mx-auto " />
      </h2>
      <div className="container w-75  mx-auto">
        <div className="row  mx-auto">
          <div className="col w-50">
            <div class="card">
              <div class="card-header">Product Name : {services.name}</div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <img src={services.image} alt="" className="img-fluid w-50" />
                </li>
                <li class="list-group-item">
                  Product price : {services.price}
                </li>
                <li class="list-group-item">Rating : {services.rating}</li>
                <li class="list-group-item">
                  Supplier name : {services.supplier}
                </li>
                <li class="list-group-item">in Stock : {services.quantity}</li>
              </ul>
            </div>
          </div>
        </div>
       <div className=" mx-auto">
       <button className="my-2 btn btn-outline-dark mx-auto">Delivered</button>
        <Link to="/addproduct" className="my-2 btn btn-outline-danger mx-2">
          Add new item
        </Link>
        <Link
          to="/manage-inventory"
          className="my-2 btn btn-outline-danger mx-2"
        >
          Manage inventory
        </Link>
       </div>
      </div>
    </div>
  );
};

export default ProductDetails;
