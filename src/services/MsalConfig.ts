import { Configuration } from "@azure/msal-browser";

const msalConfig: Configuration = {
  auth: {
    clientId: process.env.REACT_APP_MICROSOFT_ID || "",
    //authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_AD_TENANT_NAME}/`,
    redirectUri: "http://localhost/:3000",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
  forceRefresh: false,
};

const apiRequest = {
  scopes: [process.env.REACT_APP_API_SCOPE],
  forceRefresh: false,
};

export { loginRequest, apiRequest, msalConfig };
