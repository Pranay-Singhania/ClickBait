import React, { useEffect } from "react";
import "./CartItems.css";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, toggleCartQty, getCartTotal, clearCart } from "../../store/CartSlice";
import DeleteIcon from "@mui/icons-material/Delete";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CartItems = () => {
  const dispatch = useDispatch();
  const { data: cartProducts } = useSelector((state) => state.cart);
  console.log("cartitems");

  return (
    <div className="cart-left">
      <div className="cart-items">
        {cartProducts.map((cartProduct) => (
          <div className="cart-item" key={cartProduct.id}>
            <div className="cart-item-img">
              <img src={cartProduct.images[0]} alt={cartProduct.title} />
              <div className="cart-item-remove">
                <button className="whitebtn rmv-from-cart-btn" onClick={() => dispatch(removeFromCart({ id: cartProduct.id }))}>
                  <span id="activebtn" className="whitebtn trash-icon">
                    <DeleteIcon />
                  </span>
                </button>
              </div>
            </div>
            <div className="cart-item-info flexcolumn">
              <h6>{cartProduct.title}</h6>
              <div className="cqty">
                <span className="cqty-text flexcenter">Qty:</span>
                <div className="cqty-change flexrow">
                  <button
                    className="whitebtn cqty-dec flexcenter"
                    onClick={() =>
                      dispatch(
                        toggleCartQty({
                          id: cartProduct.id,
                          type: "DEC",
                        })
                      )
                    }>
                    <i className="fa-solid fa-minus" />
                  </button>
                  <span className="cqty-value flexcenter">{cartProduct.quantity}</span>
                  <button
                    className="whitebtn cqty-inc flexcenter"
                    onClick={() =>
                      dispatch(
                        toggleCartQty({
                          id: cartProduct.id,
                          type: "INC",
                        })
                      )
                    }>
                    <i className="fa-solid fa-plus" />
                  </button>
                </div>
              </div>
              <div className="prices flexrow">
                <div className="price flexrow inline-flex">
                  <p style={{ marginRight: "6px" }}>Price:</p>
                  <p>
                    <CurrencyRupeeIcon style={{ fontSize: "medium" }} />
                  </p>
                  <p>{cartProduct.price}</p>
                </div>
                <div className="sub-total-csection flexrow inline-flex">
                  <p className="flexcenter">Sub Total:</p>
                  <p className="flexcenter">
                    <CurrencyRupeeIcon style={{ fontSize: "large" }} />
                    {cartProduct.totalPrice}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="button-box">
        <button type="button" className="btn btn-danger" onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
