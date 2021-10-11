import React from "react";

import "./ShareCard.scss";
import sharesImg from "../../assets/stock-market.png";

const ShareCard = ({ card }) => {
  const brand = card.brand[0].toUpperCase() + card.brand.slice(1);
  return (
    <>
      <div className="img-container">
        <img alt="share"  src={sharesImg} />
      </div>
      <div className="info">
        <span className="number">#{card.id.toString().padStart(3, "0")}</span>
        <h3 className="name">{brand}</h3>
        <div className="details">Price: {card.price}</div>
        <div className="details">Risk level: {card.riskLevel.toLowerCase()}</div>
      </div>
    </>
  );
};

export default ShareCard;
