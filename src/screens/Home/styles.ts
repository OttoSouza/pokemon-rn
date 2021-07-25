import styled, { css } from "styled-components/native";

import { Dimensions } from "react-native";

interface WrapperPokemonProps {
  isInputVisible: boolean;
}
export const Container = styled.View`
  flex: 1;
`;

export const WrapperPokemon = styled.View<WrapperPokemonProps>`
  padding: 0 20px;

  ${(props) =>
    props.isInputVisible &&
    css`
      height: ${Dimensions.get("window").height - 250}px;
    `};

  ${(props) =>
    !props.isInputVisible &&
    css`
      height: ${Dimensions.get("window").height - 200}px;
    `};
`;
