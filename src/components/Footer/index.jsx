import React from "react";

import "./Footer.scss";
import logo from "../../assets/stock-market.png";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="branding">
          <h2>Branding</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <img className="logo" alt="logo" src={logo} />
        <div className="social-icons">
          <div className="social-icons__icon facebook">
            <FaFacebookF fill="white" />
          </div>
          <div className="social-icons__icon twitter">
            <FaTwitter fill="white" />
          </div >
          <div className="social-icons__icon linkedin">
            <FaLinkedinIn fill="white" />
          </div >
          <div className="social-icons__icon google">
            <FaGooglePlusG fill="white" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
