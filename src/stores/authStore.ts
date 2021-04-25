import { observable, action, makeAutoObservable } from "mobx";
import { msalConfig } from "../services/MsalConfig";
import * as Msal from "@azure/msal-browser";
import axios from "axios";

export class AuthStore {
  private accessToken: any = undefined;
  private idToken: any = undefined;

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

  @action login(request: Msal.PopupRequest) {
    (async () => {
      try {
        //getfrommicrosoft
        this.idToken = await this.publicClient.loginPopup(request);
        const loggedInAccountName: string = this.idToken.idTokenClaims
          .preferred_username;
        request.account =
          this.publicClient.getAccountByUsername(loggedInAccountName) ||
          undefined;
        const splittedMail = loggedInAccountName.split("@");
        if (splittedMail[1] === "hak-bregenz.at") {
          this.setLogIn(true);
          await axios.post(
            `${`${process.env.REACT_APP_API_URL}/user/login` || ""}`,
            {
              name: this.idToken.idTokenClaims.name,
              mail: loggedInAccountName,
            },
            { headers: { "Content-Type": "application/json" } }
          );
        } else {
          throw new Error("Jesus Christ use your HAK Mail!");
        }
      } catch (err) {
        console.log(err);
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
  /*
  @action getInfos(request: Msal.SilentRequest) {
    (async () => {
      this.getAccessToken(request);
      const headers = {
        Accept: "application/json",
        Authorization: "Bearer " + this.accessToken,
      };
      const graphUrl = "https://graph.microsoft.com/v1.0/me/memberOf";
      const response = await fetch(graphUrl, {
        method: "GET",
        headers: headers,
      });
      const responseData = await response.json();
      let groups = responseData.value.map((groupData: any) => {
        return {
          name: groupData.displayName ? groupData.displayName : groupData.id,
        };
      });

      return groups;
    })();
  }
*/
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
