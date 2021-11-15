import React from "react";
import { useSelector } from "react-redux";

import cartItemImg from "../../assets/stock-market.png";
import "./Cart.scss";

const Cart = () => {
  const { cartItems, quantityById } = useSelector((state) => state.cart);

  const getQuantity = (shareId) => quantityById[shareId] || 0;

  return (
    <div className="cart-page">
      <h1>Cart page</h1>
      {!cartItems.length ? (
        <h2>There aren't any items in the cart yet</h2>
      ) : (
        <React.Fragment>
          {cartItems.map((i) => (
            <div className="cart-item" key={i.brand}>
              <img alt="cart item" src={cartItemImg} />
              <h3>
                {i.brand} #{i.id.toString().padStart(3, "0")}
              </h3>
              <h3 className="cart-item__quantity">
                <button>-</button>
                {getQuantity(i.id)}
                <button>+</button>
              </h3>
              <h3>{i.price}</h3>
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
