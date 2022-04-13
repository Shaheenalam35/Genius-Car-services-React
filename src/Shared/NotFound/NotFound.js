import React from "react";
import img from "../../images/notFound.jpg";
const NotFound = () => {
  return (
    <div>
      <h2 className="text-center text-primary">Mechanic is sleeping</h2>
      <img className="w-100" src={img} alt="" />
    </div>
  );
};

export default NotFound;
