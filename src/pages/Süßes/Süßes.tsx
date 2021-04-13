import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import Salamibrot from "../../assets/salamibrot.jpg";

const Süßes = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere süßen Spezialitäten</div>
        <div className="alleBrötle">
          <div className="item1">
            <ItemCard
              title={"Plunder"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"plunder"}
            />
          </div>
          <div className="item2">
            <ItemCard
              title={"Donuts"}
              price={"€ 10,99"}
              photo={Salamibrot}
              link={"donut"}
            />
          </div>
          <div className="item3">
            <ItemCard
              title={"Milka Donut"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"milka_donut"}
            />
          </div>
          <div className="item4">
            <ItemCard
              title={"Nussschnecke"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"nussschnecke"}
            />
          </div>
          <div className="item5">
            <ItemCard
              title={"Topfentascherl"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"topfentascherl"}
            />
          </div>
          <div className="item6">
            <ItemCard
              title={"Muffins"}
              price={"€ 12,99"}
              photo={Salamibrot}
              link={"muffin"}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Süßes;
