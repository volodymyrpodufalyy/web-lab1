import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import cartItemImg from "../../assets/stock-market.png";
import ActionButtons from "../../components/ActionButtons";
import {
  addItemActionCreator,
  removeItemActionCreator,
} from "../../redux/actions/cart.actions";
import "./Cart.scss";

const Cart = () => {
  const { cartItems, quantityById, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const getQuantity = (shareId) => quantityById[shareId] || 0;

  const onRemoveClick = (item) => {
    dispatch(removeItemActionCreator(item));
  };
  const onAddCartItem = (item) => {
    dispatch(addItemActionCreator(item));
  };

  const handleBackBtn = () => history.push("/catalog");
  const handleNextBtn = () => history.push("/checkout");

  return (
    <div className="cart-page">
      <h1>Cart page</h1>
      {!cartItems.length ? (
        <div className="no-items">
          <h2>There aren't any items in the cart yet</h2>
        </div>
      ) : (
        <div className="cart-page__items">
          {cartItems.map((cartItem) => (
            <div className="cart-item" key={cartItem.brand}>
              <img alt="cart item" src={cartItemImg} />
              <h3>
                {cartItem.brand} #{cartItem.id.toString().padStart(3, "0")}
              </h3>
              <h3 className="cart-item__quantity">
                <button onClick={() => onRemoveClick(cartItem)}>-</button>
                {getQuantity(cartItem.id)}
                <button onClick={() => onAddCartItem(cartItem)}>+</button>
              </h3>
              <h3>{cartItem.price}</h3>
            </div>
          ))}
          <h2>Total: {totalPrice} $</h2>
        </div>
      )}
      <ActionButtons
        handleBackBtn={handleBackBtn}
        handleNextBtn={handleNextBtn}
      />
    </div>
  );
};

export default Cart;
