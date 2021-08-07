import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import {Container} from "./styles"
import { getIconByTypePokemon } from "../../utils/getIconByTypePokemon";
import { IPokemonType } from "../../interface/ICustomIconProps";

export const CustomIcon: React.FC<IPokemonType> = ({ type }) => {
  
  const nameIcon = getIconByTypePokemon(type);

  return (
    <Container style={{ marginRight: 4 }}>
      <FontAwesome5 name={nameIcon} color="#fff" />
    </Container>
  );
};
