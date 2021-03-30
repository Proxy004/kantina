import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";

const Login = () => {
  return (
    <div className="loginBackground">
      <div className="loginForm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
