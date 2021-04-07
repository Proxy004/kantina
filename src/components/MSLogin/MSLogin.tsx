import React from "react";
import MicrosoftLogin from "react-microsoft-login";
import Login from "../../pages/Login/Login";
const loginEnv = process.env.REACT_APP_MICROSOFT_ID;

const MSLogin = (props: any) => {
  const authHandler = (err: any, data: string) => {};
  return (
    <MicrosoftLogin
      clientId={loginEnv || ""}
      authCallback={authHandler}
      buttonTheme={"dark"}
      forceRedirectStrategy={true}
      redirectUri={"/brot"}
      debug={true}
    />
  );
};

export default MSLogin;
