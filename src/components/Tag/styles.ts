import styled from "styled-components/native";

export const Container = styled.View`
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-top: 4px;
  flex-direction: row;

`;
export const Type = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.textColor.white};
  font-weight: 700;
  text-transform: capitalize;
`;
