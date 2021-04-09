import React from "react";
import "./LoginForm.scss";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
import { loginRequest } from "../../services/MsalConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrosoft } from "@fortawesome/free-brands-svg-icons";

const LoginForm = () => {
  return (
    <div className="login">
      <div className="logo">Kantina</div>
      <div className="loginText">
        Logge dich mit deinem Microsoft Account ein. Bitte benutze den
        Schulaccount.
      </div>
      <div
        onClick={() => {
          authStore.login(loginRequest);
        }}
        className="mcButton"
      >
        <FontAwesomeIcon icon={faMicrosoft} className="mcIcon" />
        Login with Microsoft
      </div>
    </div>
  );
};

export default inject("authStore")(observer(LoginForm));
