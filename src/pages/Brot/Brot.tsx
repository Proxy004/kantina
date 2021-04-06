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
      <div className="alleBrötle">
        <div className="salamibrot">
          <ItemCard
            title={"Salamibrot"}
            price={"€ 12,99"}
            photo={Salamibrot}
            url={"/ProduktDetail"}
          />
        </div>
        <div className="tomaten">
          <ItemCard
            title={"Tomaten-Mozzarella-Brot"}
            price={"€ 10,99"}
            photo={Salamibrot}
            url={"/ProduktDetail"}
          />
        </div>
        <div className="schinkenbrot">
          <ItemCard
            title={"Schinkenbrot"}
            price={"€ 12,99"}
            photo={Salamibrot}
            url={"/ProduktDetail"}
          />
        </div>
        <div className="käsebrot">
          <ItemCard
            title={"Käsebrot"}
            price={"€ 12,99"}
            photo={Salamibrot}
            url={"/ProduktDetail"}
          />
        </div>
        <div className="gorgonzola">
          <ItemCard
            title={"Gorgonzolabrot"}
            price={"€ 12,99"}
            photo={Salamibrot}
            url={"/ProduktDetail"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brot;
