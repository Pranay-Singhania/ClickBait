import React from "react";
import "./HomePage.css";
import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import ShowCateg from "../../components/showCateg/ShowCateg";
import AllProductList from "../../components/allproductlist/AllProductList";

const HomePage = () => {
  console.log("Homepage");
  return (
    <>
      <div className="home-page">
        {console.log("render")}
        <Slider />
        <Category />
        <AllProductList />
        <ShowCateg />
      </div>
    </>
  );
};

export default HomePage;
