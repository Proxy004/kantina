import React from "react";
import cooking from "./cooking.json";
import Lottie from "lottie-react";

const animation = () => {
  const style1 = { height: 400 };

  return <Lottie animationData={cooking} style={style1} autoPlay={true} />;
};
export default animation;
