import React from "react";
import "./Navigator.css";
import { Link } from "react-router-dom";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
console.log("navigator");

const Navigator = ({ categoryName }) => {
  return (
    <div className="navigator-body">
      <ul>
        <li>
          <Link className="flexcenter" to="/">
            <HomeRoundedIcon style={{ fontSize: "large", color: "grey" }} />
          </Link>
        </li>
        <li>
          <KeyboardArrowRightRoundedIcon style={{ color: "grey" }} />
        </li>
        {categoryName === undefined ? (
          <li>Cart</li>
        ) : (
          <>
            <li>Category</li>
            <li>
              <KeyboardArrowRightRoundedIcon style={{ color: "grey" }} />
            </li>
            <li>{categoryName}</li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Navigator;
