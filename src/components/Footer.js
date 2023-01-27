import React from "react";
import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blur"></div>

      <div className="blur"></div>

      <hr />

      <div className="footer__container">
        <div className="social">
          <img src={Github} alt="github" />

          <img src={Instagram} alt="instagram" />

          <img src={LinkedIn} alt="linkedin" />
        </div>

        <div className="logo">
          <img src={Logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
