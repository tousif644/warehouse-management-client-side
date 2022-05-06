import React, { useState } from "react";
import { useEffect } from "react";

const useServiceDetails = (serviceId) => {
  //state and Effect
  const [services, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/products/${serviceId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  console.log(serviceId);
  return [services];
};

export default useServiceDetails;
