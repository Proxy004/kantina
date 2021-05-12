import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
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
import gsap from "gsap";
import { authStore } from "../../stores/authStore";
import { useHistory } from "react-router-dom";

const Warenkorb = () => {
  const [sumProducts, setSumProducts] = useState(0);
  const [siteWarenkorbLength, setSiteWarenkorbLength] = useState(0);
  const [WarenkorbSiteEnd, setWarenkorbSiteEnd] = useState(5);
  const [WarenkorbSiteStart, setWarenkorbSiteStart] = useState(0);
  const [buttonRightDisabled, setButtonRightDisabled] = useState(true);
  const [error, setError] = useState("");
  const [time, setTime] = useState("");
  const [checked, setChecked] = useState(false);
  const [site, setSite] = useState(1);
  const errors = [
    "Bitte akzeptiere unsere AGB's!",
    "Bitte wählen Sie ein Datum aus!",
    "Fügen Sie Podukte hinzu!",
  ];

  useEffect(() => {
    gsap.fromTo(
      ".itemWarenkorb1",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 }
    );
    gsap.fromTo(
      ".sumOfProducts",
      1,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1 }
    );
    updateWarenkorbSum();
    updateLength();
  }, [setSiteWarenkorbLength]);

  const updateWarenkorbSum = () => {
    let sum: number = 0;
    toJS(checkoutStore.checkoutProducts).forEach((Product) => {
      sum += Product.preis * Product.quantity;
    });
    setSumProducts(sum);
  };
  const updateLength = () => {
    let length: number;
    let bool: boolean;
    length = Math.ceil(checkoutStore.checkoutProducts.length / 5);

    if (length === 0) {
      length = 1;
    }

    if (length > 1) {
      bool = false;
    } else {
      bool = true;
    }
    setSiteWarenkorbLength(length);
    setButtonRightDisabled(bool);
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

  const setAgb = () => {
    setChecked(!checked);
  };
  const history = useHistory();
  const useForceUpdate = () => {
    //eslint-disable-next-line
    const [value, setValue] = useState(0);
    return () => setValue((value) => value + 1);
  };
  const renderError = () => {
    if (
      !checked ||
      time.trim() === "" ||
      checkoutStore.checkoutProducts.length < 1
    ) {
      if (!checked) {
        setError(errors[0]);
      }
      if (time.trim() === "") {
        console.log("afds");
        setError(errors[1]);
      }
      if (!checked && time.trim() === "") {
        setError(`${errors[0]}\n${errors[1]}`);
      }
      if (
        !checked &&
        time.trim() === "" &&
        checkoutStore.checkoutProducts.length < 1
      ) {
        setError(`${errors[0]}\n${errors[1]}\n${errors[2]}`);
      }
    } else {
      checkoutStore.sendOrderToDb(
        toJS(checkoutStore.checkoutProducts),
        time,
        authStore.loggedInUser
      );
      history.push("/warenkorb/orderCompleted");
      forceUpdate();
      setError("");
    }
  };

  const forceUpdate = useForceUpdate();

  return (
    <>
      <NavBar />
      <div className="allWarenkorb">
        <div className="leftWarenkorb">
          <div className="titleWarenkorb">Warenkorb</div>
          <div className="itemsWarenkorb">
            {checkoutStore.checkoutProducts.length >= 1 ? (
              <div className="itemWarenkorb">
                {toJS(checkoutStore.checkoutProducts)
                  .slice(WarenkorbSiteStart, WarenkorbSiteEnd)
                  .map((filteredProduct: CheckoutProduct, i: number) => {
                    return (
                      <div key={i}>
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
                                updateLength();
                                updateWarenkorbSum();
                              }}
                            />

                            <span className="quantityWarenkorb">
                              {filteredProduct.quantity}
                            </span>
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                              className="minusWarenkorb"
                              onClick={() => {
                                checkoutStore.increaseAmount(filteredProduct);
                                forceUpdate();
                                updateWarenkorbSum();
                              }}
                            />
                          </div>
                          <div className="sumWarenkorb1">
                            €
                            {(
                              filteredProduct.preis * filteredProduct.quantity
                            ).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            ) : (
              <div className="nullItems">
                Füge Produkte zum Warenkorb hinzu!
              </div>
            )}
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
            <div className="titleSumWarenkorb">Summe:</div>
            <div className="sumOfProducts">€ {sumProducts.toFixed(2)}</div>
          </div>
          <div className="pickUpTimeWarenkorb">
            Abholzeit:
            <input
              type="time"
              onChange={(e) => setTime(e.target.value)}
              value={time}
            />
          </div>

          <div className="agbWarenkorb">
            <input type="checkbox" onChange={setAgb} /> Ich habe die AGB gelesen
            und akzeptiere diese.
          </div>
          <div
            className="orderWarenkorb"
            onClick={() => {
              renderError();
            }}
          >
            <div className="textWarenkorb">kostenpflichtig Bestellen</div>
          </div>
          <div className="errorWarenkorb">{error}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Warenkorb;
