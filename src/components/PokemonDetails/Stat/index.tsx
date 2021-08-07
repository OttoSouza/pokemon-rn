import React from "react";
import * as Progress from "react-native-progress";
import { IStatProps } from "../../../interface/IAbilitiesPokemonProps";
import { randomColors } from "../../../utils/leftZeros";
import { StatContent, StatName, StatPercent } from "./styles";

export const StatComponent: React.FC<IStatProps> = ({ name, base_stat }) => {
  return (
    <>
      <StatContent>
        <StatName>{name}</StatName>
        <StatPercent>{base_stat}</StatPercent>
        <Progress.Bar
          progress={base_stat / 100}
          width={200}
          color={randomColors(1)}
        />
      </StatContent>
    </>
  );
};
