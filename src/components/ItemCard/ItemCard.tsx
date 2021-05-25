import React, { useState } from "react";
import "./ItemCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Ticker from "react-ticker";
import { Link } from "react-router-dom";
import { Produkt } from "../../models/Produkt";
import { checkoutStore } from "../../stores/checkoutStore";
import { inject, observer } from "mobx-react";

const ItemCard = (props: { product: Produkt }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const AnimatonEnter: () => void = () => {
    setIsHovered(true);
  };
  const AnimatonLeave: () => void = () => {
    setIsHovered(false);
  };

  return (
    <div className="card">
      <img
        src={require(`../../assets/${props.product.bildPfad}`).default}
        alt="Product"
        className="imageProduct"
      />
      <div className="allCard">
        <div>
          {isHovered ? (
            <Link
              to={`/produktdetail/${props.product.urlPfad}`}
              onMouseLeave={() => AnimatonLeave()}
              className="title"
            >
              <Ticker speed={9} mode={"await"} move={isHovered}>
                {() => props.product.bezeichnung}
              </Ticker>
            </Link>
          ) : (
            <Link
              to={`/produktdetail/${props.product.urlPfad}`}
              onMouseEnter={() => AnimatonEnter()}
              className="title"
            >
              {props.product.bezeichnung}
            </Link>
          )}
          <div className="price">€ {props.product.preis.toFixed(2)}</div>
          <div className="mwst">inkl. MwSt</div>
        </div>
        <div
          className="jetztKaufen"
          onClick={() => {
            checkoutStore.addProduct(props.product);
          }}
        >
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="text">Jetzt kaufen</span>
        </div>
      </div>
    </div>
  );
};

export default inject("checkoutStore")(observer(ItemCard));
