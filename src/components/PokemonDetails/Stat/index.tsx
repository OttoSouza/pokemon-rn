import React from "react";
import * as Progress from "react-native-progress";
import { randomColors } from "../../../utils/leftZeros";
import { StatContainer, StatContent, StatName, StatPercent } from "./styles";

interface Props {
  base_stat: number;
  name: string;
}

export const StatComponent: React.FC<Props> = ({ name, base_stat }) => {
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
