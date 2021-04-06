import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="allCat">
      <ul className="list">
        <li className="list-item">
          <a className="nav-links" href="/brote">
            Brote
          </a>
          <a className="nav-links" href="/herzhaftes">
            Herzhaftes
          </a>
          <a className="nav-links" href="/vegan">
            Vegan
          </a>
          <a className="nav-links" href="/süßes">
            Süßes
          </a>
          <a className="nav-links" href="/getränke">
            Getränke
          </a>
          <a className="nav-links" href="/snacks">
            Snacks
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
