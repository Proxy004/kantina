import React from "react";
import "./Footer.scss";
import Athenic from "../../assets/athenic.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="allFooter">
      <Link to={"/impressum"}>
        <div className="item">Impressum</div>
      </Link>
      <div className="copyK">2021 © Kantina</div>
      <div className="item">
        Powered by
        <img src={Athenic} alt="Powered by Athenic" />
      </div>
    </div>
  );
};

export default Footer;
