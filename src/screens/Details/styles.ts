import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;
export const Header = styled.View`
  padding: ${getStatusBarHeight() + 40}px 24px;
  flex: 1;
`;

export const BackButton = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ContentInformartion = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 16px;
`;

export const Wrapper = styled.View``;
export const PokemonIdentificator = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.textColor.white};
  font-weight: bold;
`;

export const PokemonName = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
  color: white;
`;
export const Content = styled.View`
  height: 100%;
  flex: 3;
  padding: 0 24px;
  background: white;

  border-top-right-radius: 48px;
  border-top-left-radius: 48px;
`;

export const PokemonImageContainer = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  top: -120px;
  right: 50%;
  left: 50%;
`;

export const PokemonImage = styled.Image`
  height: 160px;
  width: 160px;
`;

export const TypesContainer = styled.View`
  flex-direction: row;
`;

export const AbilityMenu = styled.TouchableOpacity``;
export const AbilityTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.textColor.grey};
  font-weight: bold;
  padding-right: 16px;
`;

export const StatContainer = styled.View``;

export const Menu = styled.View`
  margin-top: 64px;
  flex-direction: row;
  padding-bottom: 4px;
  border-bottom-width: 1px;
`;

export const AboutContainer = styled.View``;

export const AboutContent = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  padding-top: 16px;
`;
export const AboutName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: capitalize;
  padding-bottom: 8px;
`;

export const AboutInfo = styled.Text`
  font-size: 16px;
  padding-bottom: 8px;
`;
export const AboutPercent = styled.Text``;
