import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import ItemCard from "../../components/ItemCard/ItemCard";
import { productStore } from "../../stores/productStore";
import { Produkt } from "../../models/Produkt";
import { toJS } from "mobx";
import gsap from "gsap";

const HerzhafteSpeisen = () => {
  useEffect(() => {
    gsap.fromTo(
      ".item1",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
  }, []);
  return (
    <>
      <NavBar />
      <div className="everything">
        <div className="titelBrot ">Unsere herzhaften Speisen</div>
        <div className="alleBrötle">
          {toJS(productStore.product)
            .filter((products) => products.kategorie.includes("Herzhaftes"))
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

export default HerzhafteSpeisen;
