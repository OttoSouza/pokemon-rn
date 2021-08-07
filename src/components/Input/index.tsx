import React from "react";
import { Container, IconContainer, InputText } from "./styles";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { IInputProps } from '../../interface/IInputProps';

export const Input: React.FC <IInputProps>= ({...rest}) => {
  return (
    <Container >
      <InputText {...rest}/>
      <IconContainer>
        <Icon name="pokemon-go" size={32}/>
      </IconContainer>
      
    </Container>
  );
};


