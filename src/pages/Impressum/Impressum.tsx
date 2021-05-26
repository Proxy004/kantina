import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Impressum.scss";

const Impressum = () => {
  return (
    <>
      <NavBar />
      <div className="allImpressum">
        <span className="titleImpressum">Impressum</span>
      </div>
      <Footer />
    </>
  );
};

export default Impressum;
