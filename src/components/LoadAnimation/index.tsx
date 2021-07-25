import React from "react";
import Lottie from "lottie-react-native";
import { Container } from "./styles";
import loadingPokebola from "../../assets/lf30_editor_cbcj38mi.json";
import { ISVGAnimationProps } from "../../interface";


const LoadAnimation: React.FC<ISVGAnimationProps>= ({height, width}) => {
  return (
    <Container>
      <Lottie
        source={loadingPokebola}
        autoPlay
        style={{ width: width, height: height }}
        resizeMode="contain"
        loop
      />
    </Container>
  );
};

export default LoadAnimation;
