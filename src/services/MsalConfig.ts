import { Configuration } from "@azure/msal-browser";

let auth = {
  clientId: process.env.REACT_APP_MICROSOFT_ID || "",
  authority: `https://login.microsoftonline.com/${process.env.REACT_APP_AZURE_AD_TENANT_NAME}`,
  redirectUri: process.env.REACT_APP_REDIRECT_URI,
};
let cache = {
  cacheLocation: "localStorage",
  storeAuthStateINCookie: false,
};

const loginRequest = {
  scopes: ["openid", "profile", "User.Read"],
  forceRefresh: false,
};

const apiRequest = {
  scopes: [process.env.REACT_APP_API_SCOPE],
  forceRefresh: false,
};

export { loginRequest, apiRequest, auth, cache };
