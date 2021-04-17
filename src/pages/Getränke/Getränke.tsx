import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import { Produkt } from "../../models/Produkt";
import { productStore } from "../../stores/productStore";

const Vegan = () => {
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere Getränke</div>
        <div className="alleBrötle">
          {productStore.product
            .filter((products) => products.kategorie.includes("Getränke"))
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

export default Vegan;
