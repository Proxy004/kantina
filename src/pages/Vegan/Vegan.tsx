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
        <div className="titelBrot ">Unsere veganen Speisen</div>
        <div className="alleBrötle">
          <div className="item1">
            <ItemCard
              title={"Gemüsereis"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"gemüsereis"}
            />
          </div>
          <div className="item2">
            <ItemCard
              title={"Tomatenbrot"}
              price={"€ 10,99"}
              photo={Salamibrot}
              link={"tomatenbrot"}
            />
          </div>
          <div className="item3">
            <ItemCard
              title={"Vegan-Schnitzel"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"vegan_schnitzel"}
            />
          </div>
          <div className="item4">
            <ItemCard
              title={"Vegan-Burger"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"vegan_burger"}
            />
          </div>
          <div className="item5">
            <ItemCard
              title={"Gemischter Salat"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"gemischter_salat"}
            />
          </div>
          <div className="item6">
            <ItemCard
              title={"Gemüsebowl"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"gemüsebowl"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Vegan;
