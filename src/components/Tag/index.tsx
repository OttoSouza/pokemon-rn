import React from "react";
import { Container, Type } from "./styles";
import { useTheme } from "styled-components/native";
import { CustomIcon } from "../Icon";
import { IPokemonType } from "../../interface";


const Tag: React.FC<IPokemonType> = ({ type }) => {
  const { colors } = useTheme();
  
  const getColorByType = Object.entries(colors).filter((item) =>
    item[0] === type ? item[1] : ""
  );

  const getHexColor = getColorByType.map((item) => item[1]);

  return (
    <Container style={{ backgroundColor: `${getHexColor}` }}>
      <CustomIcon type={type}/>
      <Type>{type}</Type>
    </Container>
  );
};

export default Tag;
