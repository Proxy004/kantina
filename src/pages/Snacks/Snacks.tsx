import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Produkt } from "../../models/Produkt";
import { productStore } from "../../stores/productStore";
import { toJS } from "mobx";

const Snacks = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere Snacks</div>
        <div className="alleBrötle">
          {toJS(productStore.product)
            .filter((products) => products.kategorie.includes("Snacks"))
            .map((filteredProduct: Produkt, i: number) => {
              if (i > 0) {
                return (
                  <div className="item1">
                    <ItemCard product={filteredProduct} />
                  </div>
                );
              } else {
                return (
                  <div className="item0">
                    <ItemCard product={filteredProduct} />
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

export default Snacks;
