import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { IPokemonType } from "../../interface";
import {Container} from "./styles"

export const CustomIcon: React.FC<IPokemonType> = ({ type }) => {
  let nameIcon: string = "";
  switch (type) {
    case "fire":
      nameIcon = "fire";
      break;
    case "grass":
      nameIcon = "leaf";
      break;
    case "bug":
      nameIcon = "bug";
      break;
    case "normal":
      nameIcon = "";
      break;
    case "water":
      nameIcon = "water";
      break;
    case "poison":
      nameIcon = "skull";
      break;
    case "flying":
      nameIcon = "wind";
      break;
  }

  return (
    <Container style={{ marginRight: 4 }}>
      <FontAwesome5 name={nameIcon} color="#fff" />
    </Container>
  );
};
