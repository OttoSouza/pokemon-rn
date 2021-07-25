import React from "react";

import {Container,  ButtonIcon, Menu, Wrapper, Title, SubTitle,  } from "./styles";
import { Ionicons } from "@expo/vector-icons/";

interface Props {
  inputVisible?: () => void;
}

export const Header: React.FC<Props> = ({ inputVisible }) => {
  return (
    <Container>
      <Menu>
        <ButtonIcon onPress={inputVisible}>
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
