import React from "react";
import "./Menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="allCat">
      <ul className="list">
        <li className="listItem">
          <Link className="navLinks" to={"/brot"}>
            Brote
          </Link>
        </li>
        <li className="listItem">
          <Link className="navLinks" to={"/herzhaftes"}>
            Herzhaftes
          </Link>
        </li>
        <li className="listItem">
          <Link className="navLinks" to={"/vegan"}>
            Vegan
          </Link>
        </li>
        <li className="listItem">
          <Link className="navLinks" to={"/süßes"}>
            Süßes
          </Link>
        </li>
        <li className="listItem">
          <Link className="navLinks" to={"/getränke"}>
            Getränke
          </Link>
        </li>
        <li className="listItem">
          <Link className="navLinks" to={"/snacks"}>
            Snacks
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
