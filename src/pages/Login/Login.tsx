import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";
import { productStore } from "../../stores/productStore";

const Login = () => {
  useEffect(() => {
    productStore.getAllProducts();
  }, []);
  return (
    <div className="loginBackground">
      <div className="loginForm">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
