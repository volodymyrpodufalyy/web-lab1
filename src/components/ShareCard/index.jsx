import React from "react";
import { Link } from "react-router-dom";

import "./ShareCard.scss";
import sharesImg from "../../assets/stock-market.png";

const ShareCard = ({ card }) => {
  const brand = card.brand[0].toUpperCase() + card.brand.slice(1);
  return (
    <Link style={{ textDecoration: 'none', color: '#000' }} to={`/catalog/${card.id}`}>
      <div className="img-container">
        <img alt="share"  src={sharesImg} />
      </div>
      <div className="info">
        <span className="number">#{card.id.toString().padStart(3, "0")}</span>
        <h3 className="name">{brand}</h3>
        <div className="details">Price: {card.price}</div>
        <div className="details">Risk level: {card.riskLevel.toLowerCase()}</div>
      </div>
      <button className="buy-btn">Buy</button>
    </Link>
  );
};

export default ShareCard;
