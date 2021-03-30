import React from "react";
import MicrosoftLogin from "react-microsoft-login";

const MSLogin = (props: any) => {
  const authHandler = (err: any, data: any) => {
    console.log(err, data);
  };

  return (
    <MicrosoftLogin
      clientId={"76b592bd-92d7-4433-9b63-b35625f35a8a"}
      authCallback={authHandler}
      buttonTheme={"dark"}
      forceRedirectStrategy={true}
    />
  );
};

export default MSLogin;
