import React from "react";
import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <h3>Contact Page</h3>
      <h6>Name: {location?.state?.name}</h6>
      <h6>Age: {location?.state?.age}</h6>
    </div>
  );
};

export default Contact;
