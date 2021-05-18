import React from "react";
import Animation from "./AnimationOrderCompleted/AnimationOrderCompleted";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import "./OrderCompleted.scss";
import { Link } from "react-router-dom";
import { checkoutStore } from "../../stores/checkoutStore";
import { inject, observer } from "mobx-react";

const OrderCompleted = () => {
  return (
    <>
      <NavBar />
      <div className={"allOrderComplete"}>
        <div className="okAnimation">
          <Animation />
        </div>
        <div className={"textOrderCompleted"}>
          Deine Bestellung ist nun abgeschlossen!
        </div>
        <Link to={"/"}>
          <div
            onClick={() => checkoutStore.clearWarenkorb()}
            className={"backToHome"}
          >
            <div className={"iconHome"}>
              <FontAwesomeIcon icon={faHome} />
            </div>
            zurück zur Auswahl
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default inject("checkoutStore")(observer(OrderCompleted));
