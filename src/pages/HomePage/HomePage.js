import React from "react";
import "./HomePage.css";
import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import ShowCateg from "../../components/showCateg/ShowCateg";
import AllProductList from "../../components/allproductlist/AllProductList";

const HomePage = () => {
  return (
    <>
      <div className="home-page">
        <Slider />
        <Category />
        <AllProductList />
        <ShowCateg />
      </div>
    </>
  );
};

export default HomePage;
