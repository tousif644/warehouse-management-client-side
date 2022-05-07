import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useServiceDetails from "../Hooks/useServiceDetails";
import { useParams } from "react-router-dom";
import axios from "axios";
// import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [user] = useAuthState(auth);
  const [services] = useServiceDetails(serviceId);

  const handleSubmit = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      service: services.name,
      serviceId: serviceId,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios.post("http://localhost:5000/farnsOrder", order).then((response) => {
      const { data } = response;
      if (data.insertedId) {
        alert("Your order booked!!!!");
        event.target.reset();
      }
    });
  };
  return (
    <div>
      <h1 className="px-2">Checkout your product</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <form className="my-4" onSubmit={handleSubmit}>
              <input
                className="w-50 mb-3 text-capitalize  "
                type="text"
                value={
                  user.displayName ? user.displayName : "Username not found"
                }
                name="name"
                id=""
                placeholder="name"
                required
                readOnly
                disabled
              />
              <br />
              <input
                className="w-50 mb-3   "
                type="email"
                name="email"
                value={user.email}
                id=""
                placeholder="email"
                required
                readOnly
                disabled
              />
              <br />
              <input
                className="w-50 mb-3 text-capitalize text-danger fw-bold "
                type="text"
                name="service"
                id=""
                value={services.name}
                placeholder="service"
              />
              <br />
              <input
                className="w-50 mb-3 text-capitalize"
                type="text"
                name="address"
                id=""
                placeholder="address"
              />
              <br />
              <input
                className="w-50 mb-3 text-capitalize"
                type="text"
                name="phone"
                id=""
                placeholder="phone-number"
              />
              <br />
              <input
                className="btn btn-outline-primary"
                type="submit"
                value="Place Order"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
