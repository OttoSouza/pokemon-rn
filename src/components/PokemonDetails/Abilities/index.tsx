import React, { useState } from "react";
import { useEffect } from "react";
import { View } from "react-native";
import { api } from "../../../services/api";

import { AboutContent, AboutName, AboutInfo } from "./styles";

interface Props {
  abilityNames: string[];
  pokemonNumberUrl: string;
}

interface MoreInfoProps {
  height: number;
  weight: number;
}

export const Abilities: React.FC<Props> = ({ abilityNames, pokemonNumberUrl}) => {
  const [moreInfo, setMoreInfo] = useState<MoreInfoProps[]>([]);

  const loadPokemonMoreInformations = async () => {
    const response = await api.get(`pokemon/${pokemonNumberUrl}`);
    const height = await response.data.height;
    const weight = await response.data.weight;
    setMoreInfo([{ height, weight }]);
  };

  useEffect(() => {
    loadPokemonMoreInformations();
    
  }, [])
  return (
    <>
      <AboutContent>
        <AboutName>Abilities: </AboutName>
        <AboutInfo>{abilityNames}</AboutInfo>
      </AboutContent>

      {moreInfo.map((more) => (
        <View key={more.height}>
          <AboutContent>
            <AboutName>Height: </AboutName>
            <AboutInfo>{more.height / 10}m</AboutInfo>
          </AboutContent>
          <AboutContent>
            <AboutName>Weight: </AboutName>
            <AboutInfo>{more.weight / 10}kg</AboutInfo>
          </AboutContent>
        </View>
      ))}
    </>
  );
};
