import React, { useState } from "react";
import "./ItemCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Ticker from "react-ticker";

const ItemCard = (props: any) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const AnimatonEnter: () => void = () => {
    setIsHovered(true);
  };
  const AnimatonLeave: () => void = () => {
    setIsHovered(false);
  };

  return (
    <div className="card">
      <img src={props.photo} alt="Product" className="imageProduct" />
      <div className="allCard">
        <div>
          {isHovered ? (
            <a
              className="title"
              onMouseLeave={() => AnimatonLeave()}
              href="./produktdetail"
            >
              <Ticker speed={4} mode={"await"} move={isHovered}>
                {() => <>{props.title}</>}
              </Ticker>
            </a>
          ) : (
            <a
              className="title"
              onMouseEnter={() => AnimatonEnter()}
              href="./produktdetail"
            >
              {props.title}
            </a>
          )}
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
