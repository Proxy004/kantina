import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Agb.scss";

const Agb = () => {
  return (
    <>
      <NavBar />
      <div className="allAgb">
        {" "}
        <span className="titleAgb">Allgemeine Geschäftsbedingungen</span>
        <div className="contentAgb">Ich bin eine AGB</div>
      </div>
      <Footer />
    </>
  );
};
export default Agb;
