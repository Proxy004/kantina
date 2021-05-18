import React from "react";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faUser,
  faShoppingCart,
  faArrowUp,
  faUserCog,
} from "@fortawesome/free-solid-svg-icons";
import { menuStore } from "../../stores/menuStore";
import { inject, observer } from "mobx-react";
import Menu from "../Menu/Menu";
import Profile from "../Profile/Profil";
import { Link } from "react-router-dom";
import { checkoutStore } from "../../stores/checkoutStore";
import { authStore } from "../../stores/authStore";

const NavBar = () => {
  return (
    <div className="allDiv">
      <ul className="menu">
        <Link to={"/brot"} className="menuPoint">
          <div>Kantina</div>
        </Link>
        {authStore.isAdmin ? (
          <Link className="menuPoint" to={`/admin`}>
            <FontAwesomeIcon icon={faUserCog} />
          </Link>
        ) : null}
        <li className="menuPoint" onClick={() => menuStore.setMenu()}>
          <FontAwesomeIcon icon={faHamburger} />
        </li>
        <li className="menuPoint" onClick={() => menuStore.setProfile()}>
          <FontAwesomeIcon icon={faUser} />
        </li>

        <li className="menuPoint">
          <Link to={`/warenkorb`} className="cart">
            <span className={"fa-layers fa-fw "}>
              <FontAwesomeIcon icon={faShoppingCart} />
              <span className={"fa-layers-counter"}>
                {checkoutStore.lengthOfArry}
              </span>
            </span>
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
  );
};

export default inject("menuStore", "authStore")(observer(NavBar));
