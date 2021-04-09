import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { inject, observer } from "mobx-react";
//import firebase from "firebase";

//pages
import Brot from "./pages/Brot/Brot";
import Getränke from "./pages/Getränke/Getränke";
import HerzhafteSpeisen from "./pages/HerzahfteSpeisen/HerzhafteSpeisen";
import Login from "./pages/Login/Login";
import ProduktDetail from "./pages/ProduktDetail/ProduktDetail";
import Snacks from "./pages/Snacks/Snacks";
import Süßes from "./pages/Süßes/Süßes";
import Vegan from "./pages/Vegan/Vegan";
import Warenkorb from "./pages/Warenkorb/Warenkorb";

//store
import { AuthStore } from "./stores/authStore";

const pages = {
  brot: Brot,
  getränke: Getränke,
  herzhaftes: HerzhafteSpeisen,
  login: Login,
  produktdetail: ProduktDetail,
  snacks: Snacks,
  süßes: Süßes,
  vegan: Vegan,
  warenkorb: Warenkorb,
};

interface AppProps {
  authStore?: AuthStore;
}

const App = ({ authStore }: AppProps) => {
  console.log(authStore?.loggedIn);
  return (
    <div className="App">
      <Router>
        <Switch>
          {/*protected*/}
          <Route
            exact
            path="/login"
            component={
              authStore?.loggedIn
                ? () => <Redirect to="/brot"></Redirect>
                : () => <pages.login></pages.login>
            }
          ></Route>
          <Route
            exact
            path="/warenkorb"
            component={
              authStore?.loggedIn
                ? () => <pages.warenkorb></pages.warenkorb>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/brot"
            component={
              authStore?.loggedIn
                ? () => <pages.brot></pages.brot>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/getränke"
            component={
              authStore?.loggedIn
                ? () => <pages.getränke></pages.getränke>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/herzhaftes"
            component={
              authStore?.loggedIn
                ? () => <pages.herzhaftes></pages.herzhaftes>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/produktdetail/:productid"
            component={
              authStore?.loggedIn
                ? () => <pages.produktdetail></pages.produktdetail>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/snacks"
            component={
              authStore?.loggedIn
                ? () => <pages.snacks></pages.snacks>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/süßes"
            component={
              authStore?.loggedIn
                ? () => <pages.süßes></pages.süßes>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/vegan"
            component={
              authStore?.loggedIn
                ? () => <pages.vegan></pages.vegan>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          <Route
            exact
            path="/"
            component={
              authStore?.loggedIn
                ? () => <pages.brot></pages.brot>
                : () => <Redirect to="/login"></Redirect>
            }
          ></Route>
          {/*public*/}
          <Route
            exact
            path="/login"
            component={() => <pages.login></pages.login>}
          ></Route>
          <Route
            path="/"
            component={() => <Redirect to="/login"></Redirect>}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default inject("authStore")(observer(App));
