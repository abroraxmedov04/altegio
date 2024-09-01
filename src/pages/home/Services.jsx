import React from "react";

const Services = ({ img, def }) => {
  return (
    <div>
      <img src={img} alt="img" width={50} />
      <p className="w-50 inline">{def}</p>
    </div>
  );
};

export default Services;
