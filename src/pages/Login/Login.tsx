import React, { useEffect } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./Login.scss";
import { productStore } from "../../stores/productStore";
import CookieConsent from "react-cookie-consent";

const Login = () => {
  useEffect(() => {
    productStore.getAllProducts();
  }, []);
  return (
    <div className="loginBackground">
      <div className="loginForm">
        <LoginForm />
        <CookieConsent
          location="bottom"
          buttonText="Accept"
          cookieName="cookiesAccepted"
          style={{ background: "#fffaf5", color: "#01be07" }}
          buttonStyle={{
            background: "#01be07",
            color: "#fffaf5",
            fontSize: "13px",
          }}
          expires={150}
          overlay={true}
        >
          This website uses cookies to enhance the user experience.{" "}
        </CookieConsent>
      </div>
    </div>
  );
};

export default Login;
