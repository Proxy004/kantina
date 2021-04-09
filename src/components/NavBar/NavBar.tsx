import React from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { menuStore } from "../../stores/menuStore";
import { inject, observer } from "mobx-react";
import Menu from "../Menu/Menu";
import { authStore } from "../../stores/authStore";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <div className="allDiv">
        <ul className="menu">
          <Link to={"/brot"} className="menuPoint">
            <div>Kantina</div>
          </Link>
          <li className="menuPoint" onClick={() => menuStore.setMenu()}>
            <FontAwesomeIcon icon={faHamburger} />
          </li>
          <li className="menuPoint" onClick={() => authStore.logout()}>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li className="menuPoint">
            <a>
              <Link to={`/warenkorb`} className="cart">
                <FontAwesomeIcon icon={faShoppingCart} />
              </Link>
            </a>
          </li>
        </ul>
        <div
          className={`menuOpen ${
            menuStore.menuActive ? "menuOpenTrue" : "menuOpenFalse"
          } `}
        >
          <Menu />
        </div>
      </div>
    </>
  );
};

export default inject("menuStore", "authStore")(observer(NavBar));
