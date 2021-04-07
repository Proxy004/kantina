import React, { useEffect, useRef } from "react";
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
import { gsap } from "gsap";

const NavBar = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      {
        x: "-110vw",
      },
      { x: "0px", duration: 1 }
    );
  });

  return (
    <>
      {menuStore.menuActive ? (
        <div className="allDiv">
          <ul className="menu">
            <div className="menuPoint">Kantina</div>
            <li className="menuPoint" onClick={() => menuStore.setLogin()}>
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
          <div className="menuOpen" ref={boxRef}>
            <Menu />
          </div>
        </div>
      ) : (
        <div className="allDiv">
          <ul className="menu">
            <div className="menuPoint">Kantina</div>
            <li className="menuPoint" onClick={() => menuStore.setLogin()}>
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
      )}
    </>
  );
};

export default inject("menuStore")(observer(NavBar));
