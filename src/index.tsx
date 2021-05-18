import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as StoreProvider } from "mobx-react";

import { authStore } from "./stores/authStore";
import { menuStore } from "./stores/menuStore";
import { checkoutStore } from "./stores/checkoutStore";
import { productStore } from "./stores/productStore";
import { invoiceStore } from "./stores/invoiceStore";

const stores = {
  authStore,
  menuStore,
  checkoutStore,
  productStore,
  invoiceStore,
};

require("dotenv").config();

ReactDOM.render(
  <StoreProvider {...stores}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StoreProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
