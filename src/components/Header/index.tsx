import React from "react";

import {
  Container,
  ButtonIcon,
  Menu,
  Wrapper,
  Title,
  SubTitle,
} from "./styles";
import { Ionicons } from "@expo/vector-icons/";
import { IHeaderProps } from "../../interface/IHeaderProps";



export const Header: React.FC<IHeaderProps> = ({ inputIsVisible }) => {
  return (
    <Container>
      <Menu>
        <ButtonIcon onPress={inputIsVisible}>
          <Ionicons name="filter" size={24} />
        </ButtonIcon>
      </Menu>

      <Wrapper>
        <Title>Pokedex</Title>
        <SubTitle>Você tem o poder de construir seu próprio caminho</SubTitle>
      </Wrapper>
    </Container>
  );
};
