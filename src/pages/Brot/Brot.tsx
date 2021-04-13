import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import Salamibrot from "../../assets/salamibrot.jpg";
import "./Brot.scss";

const Brot = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere hausgemachten Brote</div>
        <div className="alleBrötle">
          <div className="item1">
            <ItemCard
              title={"Salamibrot"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"salamibrot"}
            />
          </div>
          <div className="item2">
            <ItemCard
              title={"Tomaten-Mozzarella-Brot"}
              price={"€ 10,99"}
              photo={Salamibrot}
              link={"tomaten_mozzarella_brot"}
            />
          </div>
          <div className="item3">
            <ItemCard
              title={"Schinkenbrot"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"schinkenbrot"}
            />
          </div>
          <div className="item4">
            <ItemCard
              title={"Käsebrot"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"käsebrot"}
            />
          </div>
          <div className="item5">
            <ItemCard
              title={"Gorgonzolabrot"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"gorgonzolabrot"}
            />
          </div>
          <div className="item6">
            <ItemCard
              title={"Laugen"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"laugen"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brot;
