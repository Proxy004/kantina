import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { checkoutStore } from "../../stores/checkoutStore";
import { CheckoutProduct } from "../../models/CheckoutProducts";
import "./Warenkorb.scss";
import { toJS } from "mobx";

const Warenkorb = () => {
  const [sumProducts, setSumProducts] = useState(0);
  const [siteWarenkorbLength, setSiteWarenkorbLength] = useState(
    Math.ceil(checkoutStore.checkoutProducts.length / 5)
  );
  const [WarenkorbSiteEnd, setWarenkorbSiteEnd] = useState(5);
  const [WarenkorbSiteStart, setWarenkorbSiteStart] = useState(0);
  const [buttonRightDisabled, setButtonRightDisabled] = useState(true);
  const [site, setSite] = useState(1);

  useEffect(() => {
    updateWarenkrobSum();
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
  }, [setSiteWarenkorbLength, siteWarenkorbLength]);
  const updateWarenkrobSum = () => {
    let sum: number = 0;
    toJS(checkoutStore.checkoutProducts).forEach((Product) => {
      sum += Product.preis * Product.quantity;
    });
    setSumProducts(sum);
  };
  const setSiteWarenkorbUp = () => {
    if (WarenkorbSiteEnd < checkoutStore.checkoutProducts.length) {
      setWarenkorbSiteStart(WarenkorbSiteEnd);
      setWarenkorbSiteEnd(WarenkorbSiteEnd + 5);
      setSite(site + 1);
    }
  };

  const setSiteWarenkorbDown = () => {
    if (WarenkorbSiteStart === 0 && WarenkorbSiteEnd === 5) {
      setSite(1);
    } else {
      setWarenkorbSiteEnd(WarenkorbSiteStart);
      setWarenkorbSiteStart(WarenkorbSiteEnd - 10);
      setSite(site - 1);
    }
  };

  const useForceUpdate = () => {
    const [value, setValue] = useState(0); // integer state
    return () => setValue((value) => value + 1); // update the state to force render
  };
  const forceUpdate = useForceUpdate();
  return (
    <>
      <NavBar />
      <div className="allWarenkorb">
        <div className="leftWarenkorb">
          <div className="titleWarenkorb">Warenkorb</div>
          <div className="itemsWarenkorb">
            <div className="itemWarenkorb">
              {toJS(checkoutStore.checkoutProducts)
                .slice(WarenkorbSiteStart, WarenkorbSiteEnd)
                .map((filteredProduct: CheckoutProduct, i: number) => {
                  return (
                    <div key={i}>
                      {}
                      <div className="itemWarenkorb1">
                        <div className="bezeichnungWarenkorb">
                          {filteredProduct.bezeichnung}
                        </div>
                        <div className="quantityWarenkorb">
                          <FontAwesomeIcon
                            icon={faMinusCircle}
                            className="plusWarenkorb"
                            onClick={() => {
                              checkoutStore.decreaseAmount(filteredProduct);
                              forceUpdate();
                              updateWarenkrobSum();
                            }}
                          />

                          {filteredProduct.quantity}
                          <FontAwesomeIcon
                            icon={faPlusCircle}
                            className="minusWarenkorb"
                            onClick={() => {
                              checkoutStore.increaseAmount(filteredProduct);
                              forceUpdate();
                              updateWarenkrobSum();
                            }}
                          />
                        </div>
                        <div className="sumWarenkorb1">
                          €{" "}
                          {(
                            filteredProduct.preis * filteredProduct.quantity
                          ).toFixed(2)}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>

            <div className="navigationWarenkorb">
              <div
                className="buttonWarenkorb"
                onClick={() => setSiteWarenkorbDown()}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </div>
              <div className="siteWarenkorb">
                Seite {site}/{siteWarenkorbLength}
              </div>
              {buttonRightDisabled ? (
                <div
                  className="buttonWarenkorbDisabled"
                  onClick={() => setSiteWarenkorbUp()}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              ) : (
                <div
                  className="buttonWarenkorb"
                  onClick={() => setSiteWarenkorbUp()}
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="rightSideWarenkorb">
          <div className="sumWarenkorb">
            <div className="titleSumWarenkorb">Summe:</div>€{" "}
            {sumProducts.toFixed(2)}
          </div>
          <div className="pickUpTimeWarenkorb">
            Abholzeit:
            <input type="time" />
          </div>

          <div className="agbWarenkorb">
            <input type="checkbox" /> Ich habe die AGB gelesen und akzeptiere
            diese.
          </div>
          <div
            className="orderWarenkorb"
            onClick={() =>
              checkoutStore.sendtoDb(checkoutStore.checkoutProducts)
            }
          >
            <Link>
              <div className="textWarenkorb">kostenpflichtig Bestellen</div>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Warenkorb;
