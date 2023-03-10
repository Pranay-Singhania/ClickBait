import React from "react";
import { error } from "../../utils/images";

const Error = () => {
  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={error} style={{ width: "240px" }} alt="loader" />
      </div>
    </div>
  );
};

export default Error;
