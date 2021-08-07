import React from "react";
import { Container, Type } from "./styles";
import { CustomIcon } from "../Icon";
import { getAllColorByType } from "../../utils/getAllColorByType";
import { IPokemonType } from "../../interface/ICustomIconProps";

export const Tag: React.FC<IPokemonType> = ({ type }) => {
  const getHexColor = getAllColorByType(type);

  return (
    <Container style={{ backgroundColor: `${getHexColor}` }}>
      <CustomIcon type={type} />
      <Type>{type}</Type>
    </Container>
  );
};

