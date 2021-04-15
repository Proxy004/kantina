import React from "react";
import "./Profile.scss";
import { authStore } from "../../stores/authStore";
import { menuStore } from "../../stores/menuStore";
import { inject, observer } from "mobx-react";

const Profile = () => {
  return (
    <div className="logOut">
      <div
        onClick={() => {
          authStore.logout();
          menuStore.setProfile();
        }}
      >
        Abmelden
      </div>
      <div
        onClick={() => {
          authStore.logoutAccount();
          menuStore.setProfile();
        }}
      >
        Account abmelden
      </div>
    </div>
  );
};
export default inject("authStore", "menuStore")(observer(Profile));
