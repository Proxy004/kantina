import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Allergene.scss";

const Allergene = () => {
  return (
    <>
      <NavBar />
      <div className="allAllergene">
        <span className="titleAllergene">Allergene</span>
        <div className="listAllergene">
          <ul>
            <li>A: Gluten</li>
            <li>B: Krebstiere</li>
            <li>C: Eier von Geflügel</li>
            <li>D: Fisch</li>
            <li>E: Erdnüsse</li>
            <li>F: Sojabohnen</li>
            <li>G: Milch von Säugetieren</li>
            <li>H: Schalenfrüchte</li>
            <li>L: Sellerie</li>
            <li>M: Senf</li>
            <li>N: Sesamsamen</li>
            <li>O: Schwefeloxid und Sulfite</li>
            <li>P: Lupinen</li>
            <li>R: Weichtiere</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Allergene;
