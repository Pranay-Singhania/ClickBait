import React, { useState } from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalVisible } from "../../store/ModalSlice";
import { addToCart } from "../../store/CartSlice";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { data: product } = useSelector((state) => state.modal);

  const increment = () => {
    setQty((prev) => prev + 1);
  };
  const decrement = () => {
    setQty((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const addToCartFunc = (product) => {
    let totalPrice = qty * product.price;
    const tempProduct = { ...product, quantity: qty, totalPrice };
    dispatch(addToCart(tempProduct));
    dispatch(setIsModalVisible(false));
    navigate("/cart");
  };
  console.log("singleProduct");

  return (
    <div className="overlay-bg">
      <div className="product-details-modal">
        <button
          className=" whitebtn modal-close-btn"
          onClick={() => {
            dispatch(setIsModalVisible(false));
          }}>
          <i className="fas fa-regular fa-xmark"></i>
        </button>
        <div className="details-content">
          {/* details left */}
          <div className="details-left">
            <div className="details-img">
              <img src={product.images[0]} alt={product.title} />
            </div>
          </div>
          {/* details right */}
          <div className="details-right">
            <div className="details-info">
              <h3 className="title">{product.title}</h3>
              <p className="description">{product.description}</p>
              <div className="price">
                <p>Price:</p>
                <p>
                  <i className="fa-solid fa-indian-rupee-sign" style={{ fontSize: "18px" }}></i>
                </p>
                <p> {product.price}</p>
              </div>
              <div className="qty" style={{ color: "darkslategray" }}>
                <span className="qty-text flexcenter">Qty:</span>
                <div className="qty-change" style={{ display: "flex" }}>
                  <button className=" whitebtn qty-dec" onClick={() => decrement()}>
                    <i className="fa-solid fa-minus" />
                  </button>
                  <span className="qty-value flexcenter" style={{ width: "40px" }}>
                    {qty}
                  </span>
                  <button className=" whitebtn qty-inc" onClick={() => increment()}>
                    <i className="fa-solid fa-plus" />
                  </button>
                </div>
              </div>
              <button type="button" className=" whitebtn btn-primary add-to-cart-btn" onClick={() => addToCartFunc(product)}>
                <span className="btn-icon">
                  <i className="fa-solid fa-cart-shopping" />
                </span>
                <span className="btn-text"> Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
