import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import Salamibrot from "../../assets/salamibrot.jpg";

const HerzhafteSpeisen = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere herzhaften Speisen</div>
        <div className="alleBrötle">
          <div className="item1">
            <ItemCard
              title={"Schnitzelsemmel"}
              price={"€ 13,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item2">
            <ItemCard
              title={"Wälderwrap"}
              price={"€ 4,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item3">
            <ItemCard
              title={"Schnitzelbrot"}
              price={"€ 30,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item4">
            <ItemCard
              title={"Crisp-Chicken Burger"}
              price={"€ 2,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item5">
            <ItemCard
              title={"Salamiwrap"}
              price={"€ 5,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item6">
            <ItemCard
              title={"Gemüse-Schinkenwrap"}
              price={"€ 7,99"}
              photo={Salamibrot}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HerzhafteSpeisen;
