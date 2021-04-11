import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import Salamibrot from "../../assets/salamibrot.jpg";

const Vegan = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere Getränke</div>
        <div className="alleBrötle">
          <div className="item1">
            <ItemCard
              title={"Mineralwasser"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item2">
            <ItemCard
              title={"Eistee Pfirsich"}
              price={"€ 10,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item3">
            <ItemCard
              title={"Eistee Zitrone"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item4">
            <ItemCard
              title={"Apfelsaft"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item5">
            <ItemCard
              title={"Johannisbeersaft"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item6">
            <ItemCard
              title={"Holundersaft"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Vegan;
