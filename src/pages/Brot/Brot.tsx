import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import { productStore } from "../../stores/productStore";
import { Produkt } from "../../models/Produkt";
import "./Brot.scss";
import { toJS } from "mobx";

const Brot = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere hausgemachten Brote</div>
        <div className="alleBrötle">
          {toJS(productStore.product)
            .filter((products) => products.kategorie.includes("Brote"))
            .map((filteredProduct: Produkt, i: number) => {
              if (i > 0) {
                return (
                  <div className="item1" key={i}>
                    <ItemCard product={filteredProduct} />
                  </div>
                );
              } else {
                return (
                  <div className="item0" key={i}>
                    <ItemCard product={filteredProduct} key={i} />
                  </div>
                );
              }
            })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Brot;
