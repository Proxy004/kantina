import React from "react";
import "./Profile.scss";
import { authStore } from "../../stores/authStore";
import { menuStore } from "../../stores/menuStore";
import { inject, observer } from "mobx-react";

const Profile = () => {
  return (
    <div
      className="logOut"
      onClick={() => {
        authStore.logout();
        menuStore.setProfile();
      }}
    >
      Abmelden
    </div>
  );
};
export default inject("authStore", "menuStore")(observer(Profile));
