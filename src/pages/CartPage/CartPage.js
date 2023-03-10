import React, { useEffect } from "react";
import "./CartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../store/CartSlice";
import Navigator from "../../components/navigator/Navigator";
import CartItems from "../../components/cartItems/CartItems";
import OrderSummary from "../../components/orderSummary/OrderSummary";

const CartPage = () => {
  const dispatch = useDispatch();
  const { data: cartProducts, totalItems } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCartTotal());
  }, [useSelector((state) => state.cart)]);

  const emptyCartMsg = <h4>No items found!</h4>;

  return (
    <div className="cart-page">
      <Navigator />

      <div className="cart-section">
        <div className="container" style={{ maxWidth: "95%" }}>
          <div className="csection-title">
            <h3>My Cart</h3>
          </div>
          {cartProducts.length === 0 ? (
            emptyCartMsg
          ) : (
            <div className="cart-content">
              <CartItems />
              <OrderSummary totalItems={totalItems} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
