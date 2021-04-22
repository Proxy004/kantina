import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { checkoutStore } from "../../stores/checkoutStore";
import "./Warenkorb.scss";
import { toJS } from "mobx";

const Warenkorb = () => {
  let sum: number = 0;
  const [sumProducts, setSumProducts] = useState(0);
  const [siteWarenkorbLength, setSiteWarenkorbLength] = useState(
    Math.ceil(checkoutStore.checkoutProducts.length / 5)
  );
  const [buttonRightDisabled, setButtonRightDisabled] = useState(true);

  useEffect(() => {
    //sumProducts
    toJS(checkoutStore.checkoutProducts).forEach((Product) => {
      sum += Product.preis;
    });

    //WarenkorbSite
    if (siteWarenkorbLength === 0) {
      setSiteWarenkorbLength(1);
    }
    //setButtonDisabled
    if (siteWarenkorbLength > 1) {
      setButtonRightDisabled(false);
    } else {
      setButtonRightDisabled(true);
    }
    setSumProducts(sum);
  }, [setSiteWarenkorbLength, setSumProducts, siteWarenkorbLength]);

  return (
    <>
      <NavBar />
      <div className="titleWarenkorb">Warenkorb</div>
      <div className="itemsWarenkorb">
        <div className="itemWarenkorb">
          {toJS(checkoutStore.checkoutProducts).map(
            (filteredProduct: Produkt, i: number) => {
              <div></div>;
            }
          )}
        </div>
        <div className="buttonLeftWarenkorb">
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="siteWarenkorb">Seite 1/{siteWarenkorbLength}</div>
        <div className="buttonRightWarenkorb">
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
      <div className="rightSideWarenkorb">
        <div className="sumWarenkorb">
          <div className="titleSumWarenkorb">Summe:</div>€ {sumProducts}
        </div>
        <div className="pickUpTimeWarenkorb">{/*Picker */}</div>
        <div className="agbWarenkorb">
          {/*Checkbox */} Ich habe die AGB gelesen und akuzeptiere diese.
        </div>
        <div className="orderWarenkorb">
          <Link>{/*axios push */} kostenpflichtig Bestellen</Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Warenkorb;
