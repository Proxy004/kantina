import { observable, action, makeAutoObservable } from "mobx";
//import { User } from "../models/User"; für user post
import { auth } from "../services/MsalConfig";
import * as Msal from "@azure/msal-browser";

export class AuthStore {
  @observable accessToken: any = undefined;

  @observable idToken: any = undefined;

  @observable user: any = undefined;
  @action setUser: (user: any) => void = (user: any) => {
    this.user = user;
  };

  @observable publicClient: any = Msal.PublicClientApplication;

  @action setClient: (client: any) => void = (client: any) => {
    this.publicClient = client;
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

  @action login(
    myMsal: Msal.PublicClientApplication,
    request: Msal.PopupRequest
  ) {
    (async () => {
      try {
        this.idToken = await myMsal.loginPopup(request);
        const loggedInAccountName = this.idToken.idTokenClaims
          .preferred_username;
        request.account =
          myMsal.getAccountByUsername(loggedInAccountName) || undefined;
      } catch (err) {
        console.log(err);
      }
    })();
  }

  @action getAccessToken(
    myMsal: Msal.PublicClientApplication,
    request: Msal.SilentRequest
  ) {
    (async () => {
      let tokenResponse: Msal.AuthenticationResult;
      try {
        tokenResponse = await myMsal.acquireTokenSilent(request);
        this.accessToken = tokenResponse.accessToken;
      } catch (err) {
        console.log(err);
        //PopUp anfordern
        if (this.requiresInteraction(err))
          try {
            tokenResponse = await myMsal.acquireTokenPopup(request);
            this.accessToken = tokenResponse.accessToken;
          } catch (err) {
            console.log(err);
          }
      }
    })();
  }
  initialize() {
    const myMsal = new Msal.PublicClientApplication(auth);
    authStore.setClient(myMsal);
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
