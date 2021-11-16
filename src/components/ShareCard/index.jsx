import React from "react";
import { useHistory } from "react-router-dom";

import "./ShareCard.scss";
import sharesImg from "../../assets/stock-market.png";
import { useDispatch } from "react-redux";
import { addItemActionCreator } from "../../redux/actions/cart.actions";

const ShareCard = ({ card }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const brand = card.brand[0].toUpperCase() + card.brand.slice(1);

  const handleAddToCart = (e, shareData) => {
    e.stopPropagation();
    dispatch(addItemActionCreator(shareData));
    history.push("/cart");
  };

  return (
    <React.Fragment>
      <div className="content" onClick={() => history.push(`/catalog/${card.id}`)}>
        <div className="img-container">
          <img alt="share" src={sharesImg} />
        </div>
        <div className="info">
          <span className="number">#{card.id.toString().padStart(3, "0")}</span>
          <h3 className="name">{brand}</h3>
          <div className="details">Price: {card.price}</div>
          <div className="details">
            Risk level: {card.riskLevel.toLowerCase()}
          </div>
          <div className="details">
            Trading level: {card.tradingLevel.toLowerCase()}
          </div>
          <div className="details">
            Category: {card.sharesCategory.toLowerCase()}
          </div>
        </div>
      </div>
      <button className="buy-btn" onClick={(e) => handleAddToCart(e,card)}>
        Buy
      </button>
    </React.Fragment>
  );
};

export default ShareCard;
