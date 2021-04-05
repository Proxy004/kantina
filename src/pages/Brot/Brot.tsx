import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import Salamibrot from "../../assets/salamibrot.jpg";
import "./Brot.scss";

const Brot = () => {
  return (
    <div>
      <NavBar />
      <div className="titelBrot ">Unsere hausgemachten Brote</div>
      <div className="Salamibrot">
        <ItemCard
          title={"Salamibrot"}
          price={"€ 12,99"}
          photo={Salamibrot}
          url={"/ProduktDetail"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Brot;
