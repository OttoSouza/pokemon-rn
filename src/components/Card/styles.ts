import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  margin: 8px 0;
  padding: 16px;
  border-radius: 8px;
`;
export const Content = styled.View`
  flex-direction: row;
`;

export const PokemonIdentificatorContainer = styled.View`
  /* style={{ width: Dimensions.get("screen").width / 1.8 }} */
`;
export const PokemonIdentificator = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.textColor.number};
  font-weight: bold;
`;
export const PokemonName = styled.Text`
  font-size: 24px;
  color: ${(props) => props.theme.textColor.white};
  font-weight: bold;
  text-transform: capitalize;
`;

export const ImageContainer = styled.View`
  position: absolute;
  right: 0;
  top: -24px;
`;

export const PokemonImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
`;
