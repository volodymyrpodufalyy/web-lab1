import React from "react";

import "./Header.scss";
import logo from "../../assets/stock-market.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <img className="logo" alt="logo" src={logo} />
        <h2 className="tab-name">Home page</h2>
      </div>
    </header>
  );
};

export default Header;
