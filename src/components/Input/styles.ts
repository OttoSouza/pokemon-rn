import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { TextInput } from 'react-native';

export const Container = styled.View`
  flex-direction: row;
  margin: 8px 20px;
`;

export const IconContainer = styled.View`
  background: ${(props) => props.theme.customColor.input};
  height: 56px;
  width: 56px;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const InputText = styled(TextInput)`
  flex: 1;
  background: ${(props) => props.theme.customColor.input};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0 8px;
`;
