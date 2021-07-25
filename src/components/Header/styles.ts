import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View `
  padding: 0 20px;
  padding-top: 16px;
  margin-bottom: 8px;
  height: ${getStatusBarHeight() + 120}px;
`

export const Wrapper = styled.View `
  align-items: center;
`
export const Menu = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-top: ${getStatusBarHeight() + 8}px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor.black};
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: ${(props) => props.theme.textColor.grey};
`;

export const ButtonIcon = styled.TouchableWithoutFeedback``;

