import React from "react";
import "./Profile.scss";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
const Profile = () => {
  return (
    <div
      className="logOut"
      onClick={() => {
        authStore.logout();
      }}
    >
      Abmelden
    </div>
  );
};
export default inject("authStore")(observer(Profile));
