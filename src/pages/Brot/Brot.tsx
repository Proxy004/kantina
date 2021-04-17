import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import { productStore } from "../../stores/productStore";
import { Produkt } from "../../models/Produkt";
import "./Brot.scss";

const Brot = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere hausgemachten Brote</div>
        <div className="alleBrötle">
          {productStore.product
            .filter((products) => products.kategorie.includes("Brot"))
            .map((filteredProduct: Produkt, i: number) => () => {
              if (i > 0) {
                <div className="item1">
                  <ItemCard product={filteredProduct} />
                </div>;
              } else {
                <div className="item0">
                  <ItemCard product={filteredProduct} />
                </div>;
              }
            })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brot;
