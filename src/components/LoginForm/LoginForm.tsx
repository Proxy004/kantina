import React from "react";
import MSLogin from "../MSLogin/MSLogin";
import "./LoginForm.scss";
const LoginForm = () => {
  return (
    <div className="login">
      <div className="logo">Kantina</div>
      <div className="loginText">
        Logge dich mit deinem Microsoft Account ein. Bitte benutze den
        Schulaccount.
      </div>
      <MSLogin />
    </div>
  );
};

export default LoginForm;
