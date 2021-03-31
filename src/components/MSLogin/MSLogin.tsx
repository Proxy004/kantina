import React from "react";
import MicrosoftLogin from "react-microsoft-login";

const MSLogin = (props: any) => {
  const authHandler = (err: any, data: any) => {
    console.log(err, data);
  };

  return (
    <MicrosoftLogin
      clientId={process.env.REACT_APP_CLIENT_ID || ""}
      authCallback={authHandler}
      buttonTheme={"dark"}
      forceRedirectStrategy={true}
    />
  );
};

export default MSLogin;
