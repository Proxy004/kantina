import { observable, action, makeAutoObservable } from "mobx";
//import { User } from "../models/User"; für user post
import { msalConfig } from "../services/MsalConfig";
import * as Msal from "@azure/msal-browser";

export class AuthStore {
  @observable accessToken: any = undefined;

  @observable idToken: any = undefined;

  @observable user: any = undefined;
  @action setUser: (user: any) => void = (user: any) => {
    this.user = user;
  };

  @observable
  publicClient: Msal.PublicClientApplication = new Msal.PublicClientApplication(
    msalConfig
  );
  @action setClientId: (clientId: Msal.PublicClientApplication) => void = (
    clientId: Msal.PublicClientApplication
  ) => {
    this.publicClient = clientId;
  };

  @observable loggedIn: boolean = false; //false

  @action setLoggedIn: (value: any) => void = (value: any) => {
    this.loggedIn = value;
  };

  @action setlogin = (value: boolean) => {
    this.loggedIn = value;
  };

  @action logout = () => {
    this.publicClient.logoutPopup();
    this.setLoggedIn(false);
  };

  @action login(request: Msal.PopupRequest) {
    (async () => {
      try {
        this.idToken = await this.publicClient.loginPopup(request);
        const loggedInAccountName = this.idToken.idTokenClaims
          .preferred_username;
        request.account =
          this.publicClient.getAccountByUsername(loggedInAccountName) ||
          undefined;
      } catch (err) {
        console.log(err + " login");
      }
    })();
  }

  @action getAccessToken(request: Msal.SilentRequest) {
    (async () => {
      let tokenResponse: Msal.AuthenticationResult;
      try {
        tokenResponse = await this.publicClient.acquireTokenSilent(request);
        this.accessToken = tokenResponse.accessToken;
      } catch (err) {
        console.log(err);
        //PopUp anfordern
        if (this.requiresInteraction(err))
          try {
            tokenResponse = await this.publicClient.acquireTokenPopup(request);
            this.accessToken = tokenResponse.accessToken;
          } catch (err) {
            console.log(err + " accestoken");
          }
      }
    })();
  }
  requiresInteraction(errorCode: any) {
    if (!errorCode || !errorCode.length) {
      return false;
    }
    return (
      //error codes für failes silent request
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
