import React from "react";
import MicrosoftLogin from "react-microsoft-login";

const loginEnv = process.env.REACT_APP_MICROSOFT_ID;

const MSLogin = (props: any) => {
  const authHandler = (err: any, data: string) => {};
  return (
    <MicrosoftLogin
      clientId={loginEnv || ""}
      authCallback={authHandler}
      buttonTheme={"dark"}
      forceRedirectStrategy={true}
    />
  );
};

export default MSLogin;
