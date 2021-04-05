import React from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="allDiv">
      <ul className="menu">
        <div className="menuPoint">Kantina</div>
        <li className="menuPoint">
          <FontAwesomeIcon icon={faHamburger} />
        </li>
        <li className="menuPoint">
          <FontAwesomeIcon icon={faUser} />
        </li>
        <li className="menuPoint">
          <a href="/warenkorb" className="cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
