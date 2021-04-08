import React from "react";
import "./LoginForm.scss";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
import { loginRequest } from "../../services/MsalConfig";

const LoginForm = () => {
  return (
    <div className="login">
      <div className="logo">Kantina</div>
      <div className="loginText">
        Logge dich mit deinem Microsoft Account ein. Bitte benutze den
        Schulaccount.
      </div>
      <div onClick={() => authStore.login(loginRequest)} className="mcButton">
        Microsoft
      </div>
    </div>
  );
};

export default inject("authStore")(observer(LoginForm));
