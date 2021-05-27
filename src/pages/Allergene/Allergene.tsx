import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import "./Allergene.scss";
import Allergens from "../../assets/allergene.jpg";

const Allergene = () => {
  return (
    <>
      <NavBar />
      <div className="allAllergene">
        <span className="titleAllergene">Allergene</span>

        <img
          src={Allergens}
          alt={"Unsere Allergene"}
          className={"pictureAllergene"}
        />
      </div>
      <Footer />
    </>
  );
};

export default Allergene;
