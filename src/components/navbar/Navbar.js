import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Badge from "@mui/material/Badge";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal } from "../../store/CartSlice";
import Search from "../search/Search";
import { useNavigate } from "react-router-dom";
import { logo } from "../../utils/images";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.data);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getCartTotal());
  }, []);

  return (
    <nav className="outer-nav">
      <nav className="navbar-top navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand ">
            <span>
              <img src={logo} alt="logo" width="10rem" />
            </span>
          </Link>
          <Search />
          <div className="nav-cart" onClick={() => navigate("/cart")}>
            <Badge badgeContent={totalItems} sx={{ "& .MuiBadge-badge": { backgroundColor: "gold" } }}>
              <i className="fas fa-regular fa-cart-shopping"></i>
              <span className="cart-txt">cart</span>
            </Badge>
          </div>
        </div>
      </nav>
      <div className="nav-menu">
        <ul className={`nav-links ${isSidebarOpen ? "show-nav-links" : ""}`}>
          <button className="nav-bot-cross" onClick={() => setIsSidebarOpen(false)}>
            <i className="fa-solid fa-xmark"></i>
          </button>

          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.id}`} className="nav-link" onClick={() => setIsSidebarOpen(false)}>
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <button className="nav-bot-menu" onClick={() => setIsSidebarOpen(true)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
