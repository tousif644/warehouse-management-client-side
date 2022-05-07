import React from "react";
import { useNavigate} from "react-router-dom";

const Product = ({ products }) => {
  const { _id, name, price, rating, description, image } = products;
  //navigation to details
  const navigate = useNavigate();

  const navigateDetails = (id) => {
    navigate(`/inventory/${id}`);
  };
  const navigateCheckout = (serviceId) => {
    navigate(`/order/${serviceId}`)
  }

  return (
    <div>
      <div class="col-sm-6 col-md-11">
        <div class="card mb-4">
          <img src={image} alt="im" />
          <div class="card-header fs-5">{name}</div>
          <div class="card-body">
            <h5>
              Price : <span style={{ color: "GrayText" }}>{price}</span>
            </h5>
            <p class="card-text">{description}</p>
            <p>Rating : {rating}</p>
              <>
                <button
                  onClick={() => navigateDetails(_id)}
                  className="btn btn-outline-danger"
                >
                  Update now
                </button>
              </>
              <>
                <button
                  onClick={() => navigateCheckout(_id)}
                  className="btn btn-outline-dark"
                >
                  Add Now
                </button>
              </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
