import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";
import logo from "../../assets/stock-market.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <img className="logo" alt="logo" src={logo} />
        <div className="tab-links">
          <Link to={"/"} style={{ color: "#000" }}>
            <h2 className="tab-name">Home page</h2>
          </Link>
          <Link to={"/catalog"} style={{ color: "#000" }}>
            <h2 className="tab-name">Catalog page</h2>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
