import React from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faUser,
  faShoppingCart,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { menuStore } from "../../stores/menuStore";
import { inject, observer } from "mobx-react";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profile";
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
          <li className="menuPoint" onClick={() => menuStore.setProfile()}>
            <FontAwesomeIcon icon={faUser} />
          </li>
          <li className="menuPoint">
            <Link to={`/warenkorb`} className="cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
        <div
          className={`menuOpen ${
            menuStore.menuActive ? "menuOpenTrue" : "menuOpenFalse"
          } `}
        >
          <Menu />
        </div>
        <div
          className={`profileActive ${
            menuStore.profileActive ? "profileActiveTrue" : "profileActiveFalse"
          } `}
        >
          <div className="arrowUp">
            <FontAwesomeIcon icon={faArrowUp} />
          </div>
          <Profile />
        </div>
      </div>
    </>
  );
};

export default inject("menuStore", "authStore")(observer(NavBar));
