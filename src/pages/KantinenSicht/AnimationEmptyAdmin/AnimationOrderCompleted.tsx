import React from "react";
import empty from "./empty.json";
import Lottie from "lottie-react";

const animation = () => {
  const style1 = { height: 400 };

  return <Lottie animationData={empty} style={style1} autoPlay={true} />;
};
export default animation;
