import React, { useState, useEffect } from "react";

import { Spin, ShareCard } from "../index";
import "./SharesList.scss";
import { sharesApi } from "../../utils/api";

const SharesList = () => {
  const [shares, setShares] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    sharesApi.getAll().then(({ data }) => {
      if (showMore) setShares(data);
      else setShares(data.slice(0, 4));
    });
  }, [showMore]);

  if (!shares.length) {
    return <Spin />;
  }

  const handleShowMore = () => {
    setShowMore(true);
  };

  return (
    <section className="section_shares">
      <ul className="shares__list">
        {shares.map((shareInfo) => (
          <li className="share" key={shareInfo.id}>
            <ShareCard card={shareInfo} />
          </li>
        ))}
      </ul>
      {!showMore && (
        <div className="more-wrapper">
          <button onClick={handleShowMore} className="more-btn">
            Show more
          </button>
        </div>
      )}
    </section>
  );
};

export default SharesList;
