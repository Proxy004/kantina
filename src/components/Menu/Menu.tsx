import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="allCat">
      <ul className="list">
        <li className="listItem">
          <a className="navLinks" href="/brote">
            Brote
          </a>
        </li>
        <li className="listItem">
          <a className="navLinks" href="/herzhaftes">
            Herzhaftes
          </a>
        </li>
        <li className="listItem">
          <a className="navLinks" href="/vegan">
            Vegan
          </a>
        </li>
        <li className="listItem">
          <a className="navLinks" href="/süßes">
            Süßes
          </a>
        </li>
        <li className="listItem">
          <a className="navLinks" href="/getränke">
            Getränke
          </a>
        </li>
        <li className="listItem">
          <a className="navLinks" href="/snacks">
            Snacks
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
