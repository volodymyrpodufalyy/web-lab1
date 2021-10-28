import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spin } from "../../components";

import { sharesApi } from "../../utils/api";
import sharesImg from "../../assets/stock-market.png";
import "./Share.scss";

const Share = () => {
  const { id } = useParams();
  const [shareData, setShareData] = useState({});

  useEffect(() => {
    sharesApi.getOne(id).then(({ data }) => {
      setShareData(data);
    });
  }, []);

  console.log(shareData, "setShareData");

  if (!shareData.brand) {
    return <Spin />;
  }

  return (
    <div className="share-page">
      <div>
        <div className="row-container">
          <div className="img-container">
            <img alt="share" src={sharesImg} />
          </div>
          <div className="share-description">
            <div className="row-container">
              <h4 className="share-characteristic">
                Risklevel: {shareData.riskLevel}
              </h4>
              <h4 className="share-characteristic">
                Trading level: {shareData.tradingLevel}
              </h4>
            </div>
            <h1>
              {shareData.brand} #{shareData.id.toString().padStart(3, "0")}
            </h1>
            <p className="share-description__article">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Explicabo amet tempore, impedit libero, molestias voluptate iusto,
              laborum quia repellendus illum beatae corrupti ad obcaecati
              ratione consequatur totam. Commodi, tenetur cupiditate.
            </p>
          </div>
        </div>
        <div className="row-container bottom-info">
          <h2>Price: {shareData.price}$</h2>
          <div className="row-container">
            <button className="bottom-info__btn_white">Go back</button>
            <button className="bottom-info__btn">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
