import { url } from "node:inspector";
import React from "react";
import "./ItemCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const ItemCard = (props: any) => {
  return (
    <div className="card">
      <img src={props.photo} alt="Product" className="imageProduct" />
      <div className="allCard">
        <div>
          <div className="title">{props.title}</div>
          <div className="price">{props.price}</div>
          <div className="mwst">inkl. MwSt</div>
        </div>
        <div>
          <a href={props.url} className="jetztKaufen">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="text">Jetzt kaufen</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
