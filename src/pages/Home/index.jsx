import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import { SharesList, Intro, Spin } from "../../components";
import { sharesApi } from "../../utils/api";

const Home = () => {
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
    <>
      <Intro />
      <SharesList shares={shares} />
      <div className="more-wrapper">
        {!showMore && <button onClick={handleShowMore} className="more-btn">
          Show more
        </button>}
      </div>
    </>
  );
};

export default Home;
