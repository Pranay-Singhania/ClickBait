import React from "react";
import { spinner } from "../../utils/images";

const Loader = () => {
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img src={spinner} style={{ width: "240px" }} alt="loader" />
      </div>
    </div>
  );
};

export default Loader;
