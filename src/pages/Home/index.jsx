import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import "./Home.scss";
import { SharesList, Intro } from "../../components";
import { sharesApi } from "../../utils/api";

const Home = () => {

  const [shares, setShares] = useState([]);

  useEffect(() => {
    sharesApi.getAll().then(({ data }) => {
      setShares(data.slice(0, 4));
    });
  }, []);

  return (
    <>
      <Intro />
      <SharesList shares={shares} />
      <div className="more-wrapper">
        <Link to={"/catalog"}>
          <button className="more-btn">Show more</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
