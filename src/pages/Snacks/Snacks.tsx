import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import Salamibrot from "../../assets/salamibrot.jpg";

const Snacks = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere Snacks</div>
        <div className="alleBrötle">
          <div className="item1">
            <ItemCard title={"Plunder"} price={"€ 12,99"} photo={Salamibrot} />
          </div>
          <div className="item2">
            <ItemCard title={"Donuts"} price={"€ 10,99"} photo={Salamibrot} />
          </div>
          <div className="item3">
            <ItemCard
              title={"Milchschnitte"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item4">
            <ItemCard title={"Lollipop"} price={"€ 12,99"} photo={Salamibrot} />
          </div>
          <div className="item5">
            <ItemCard
              title={"Milka Tender"}
              price={"€ 12,99"}
              photo={Salamibrot}
            />
          </div>
          <div className="item6">
            <ItemCard title={"Fizzers"} price={"€ 12,99"} photo={Salamibrot} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Snacks;
