import React from "react";
import { TextInputProps } from "react-native";
import { Container, IconContainer, InputText } from "./styles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

interface InputPropps extends TextInputProps{
  placeholder: string;
}

const Input: React.FC <InputPropps>= ({...rest}) => {
  return (
    <Container >
      <InputText {...rest}/>
      <IconContainer>
        <Icon name="pokemon-go" size={32}/>
      </IconContainer>
    </Container>
  );
};

export default Input;
