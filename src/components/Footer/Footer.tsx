import React from "react";
import "./Footer.scss";
import Athenic from "../../assets/athenic.png";

const Footer = () => {
  return (
    <div className="allFooter">
      <div className="item">Impressum</div>
      <div className="copyK">2021 © Kantina</div>
      <div className="item">
        Powered by
        <img src={Athenic} alt="Powered by Athenic" />
      </div>
    </div>
  );
};

export default Footer;
