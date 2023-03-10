import { useSelector } from "react-redux";
import React from "react";

const OrderSummary = ({ totalItems }) => {
  const { totalAmount, totalDeliveryCharge } = useSelector((state) => state.cart);

  return (
    <div className="cart-right-section">
      <div className="cart-right">
        <div className="cart-summary">
          <div className="cart-summary-title">
            <h6>Order Summary</h6>
          </div>
          <ul className="cart-summary-info">
            <li>
              <span>Selected {totalItems} item(s) Price</span>
              <span>{totalAmount}</span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>Discount</span>
              <span style={{ fontWeight: "700" }}>
                <span style={{ fontWeight: "500", color: "red" }}>-&nbsp;</span>0
              </span>
            </li>
            <li>
              <span style={{ fontWeight: "400" }}>Delivery Cost</span>
              <span style={{ fontWeight: "700" }}>
                <span style={{ fontWeight: "500", color: "goldenRod" }}>+&nbsp;</span>
                {totalDeliveryCharge}
              </span>
            </li>
          </ul>
          <div className="cart-summary-total">
            <span>Grand Total:</span>
            <span>{totalAmount + totalDeliveryCharge}</span>
          </div>
          <div className="cart-summary-btn">
            <button className="btn btn-warning">Proceed to checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
