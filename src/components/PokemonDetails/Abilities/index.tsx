import React, { useState, useEffect} from "react";
import { AboutContent, AboutName, AboutInfo } from "./styles";
import { Alert, View } from "react-native";
import { IAbilitiesProps, IMoreInfoProps } from "../../../interface/IAbilitiesPokemonProps";

import { ERROR_LOADING_SOME_EXTRA_INFORMATIONS } from "../../../Errors/messages";
import { api } from "../../../services/api";

export const Abilities: React.FC<IAbilitiesProps> = ({ abilityNames, pokemonNumberUrl}) => {
  const [moreInfo, setMoreInfo] = useState<IMoreInfoProps[]>([]);

  const loadPokemonMoreInformations = async () => {
    try {
      const response = await api.get(`pokemon/${pokemonNumberUrl}`);
      const height = await response.data.height;
      const weight = await response.data.weight;
      setMoreInfo([{ height, weight }]);
    } catch (error) {
      Alert.alert(`${ERROR_LOADING_SOME_EXTRA_INFORMATIONS}`)
    }
  
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
