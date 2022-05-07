import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyItem = () => {
  const [user] = useAuthState(auth);
  console.log(user.email);

  // getting orders value via axios
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      const email = user.email;
      const url = `http://localhost:5000/order?email=${email}`;
      const { data } = await axios.get(url);
      setOrders(data);
    };
    getOrders();
  }, [user]);
  console.log(orders);

  
  return (
    <div>
      <h1>You total ordered : {orders.length}</h1>
    </div>
  );
};

export default MyItem;
