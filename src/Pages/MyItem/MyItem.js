import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import MyItemView from "./MyItemView/MyItemView";

const MyItem = () => {
  const [user] = useAuthState(auth);

  // getting orders value via axios
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/farnsOrder?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);
  console.log(user);

  // console.log(orders.map(order => console.log(order.email)));
  return (
    <div>
      <h1>You total ordered : {orders.length} item</h1>
      {orders.map((order) => (
        <div className="container">
          <div className="row row-cols-2">
            <MyItemView key={order._id} orders={order}></MyItemView>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyItem;
