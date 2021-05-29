import { observable, action, makeAutoObservable } from "mobx";
import { msalConfig } from "../services/MsalConfig";
import * as Msal from "@azure/msal-browser";
import axios from "axios";

export class AuthStore {
  @observable idToken: any = undefined;
  @observable loggedInUser: string = "";
  @observable
  publicClient: Msal.PublicClientApplication = new Msal.PublicClientApplication(
    msalConfig
  );
  @action setClientId: (clientId: Msal.PublicClientApplication) => void = (
    clientId: Msal.PublicClientApplication
  ) => {
    this.publicClient = clientId;
  };

  @observable loggedIn: boolean = false;
  @action setLogIn: (value: boolean) => void = (value: boolean) => {
    this.loggedIn = value;
  };
  @action logoutAccount = () => {
    this.publicClient.logoutPopup();
    this.setLogIn(false);
  };
  @action logout = () => {
    this.setLogIn(false);
    localStorage.clear();
  };

  @action setAdmin: (admin: any) => void = (admin: any) => {
    if (admin[0].mitarbeiter === 1) {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  };

  @observable isAdmin: boolean = false;

  @action login(request: Msal.PopupRequest) {
    (async () => {
      try {
        //getfrommicrosoft
        this.idToken = await this.publicClient.loginPopup(request);
        const loggedInAccountName: string =
          this.idToken.idTokenClaims.preferred_username;
        request.account =
          this.publicClient.getAccountByUsername(loggedInAccountName) ||
          undefined;
        const splittedMail = loggedInAccountName.split("@");
        if (splittedMail[1] === "hak-bregenz.at") {
          this.setLogIn(true);
          this.loggedInUser = loggedInAccountName;
          try {
          await axios.post(
            `${`${process.env.REACT_APP_API_URL}/user/loginUser` || ""}`,
            {
              name: this.idToken.idTokenClaims.name,
              email: loggedInAccountName,
              loginDate: this.idToken.idTokenClaims.iat,
              token: this.idToken.idTokenClaims.aud,
            },
            { headers: { "Content-Type": "application/json" } }
          );
           } catch (err) {
            console.log(err);
          }
        
          try {
            await axios
              .get(
                `${`${process.env.REACT_APP_API_URL}/user/checkIfAdmin` || ""}`,
                { headers: { email: this.loggedInUser } }
              )
              .then((res) => {
                this.setAdmin(res.data);
              });
          } catch (err) {
            console.log(err);
          }
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }

  requiresInteraction(errorCode: any) {
    if (!errorCode || !errorCode.length) {
      return false;
    }
    return (
      //error codes  failes silent request
      errorCode === "consent_required" ||
      errorCode === "interaction_required" ||
      errorCode === "login_required"
    );
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export const authStore = new AuthStore();
