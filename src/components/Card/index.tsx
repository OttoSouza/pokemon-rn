import React, { useCallback, useEffect, useState } from "react";
import { View, Text } from "react-native";
import Tag from "../Tag";
import { Dimensions } from "react-native";
import { api } from "../../services/api";
import {
  Container,
  Content,
  PokemonIdentificatorContainer,
  PokemonIdentificator,
  PokemonName,
  ImageContainer,
  PokemonImage,
  TypesContainer,
} from "./styles";
import { useTheme } from "styled-components/native";
import { leftZeros } from "../../utils/leftZeros";
import { IPokemonsProps } from "../../interface";
import { useNavigation } from "@react-navigation/native";

interface Props {
  pokemon: IPokemonsProps;
}

const Card: React.FC<Props> = ({ pokemon }) => {
  const { backgroundColors } = useTheme();
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const imageURL = `https://pokeres.bastionbot.org/images/pokemon/${pokemon.pokemonNumberUrl}.png`;
  const { navigate } = useNavigation();
  useEffect(() => {
    let isMounted = true;

    const loadTypes = async () => {
      try {
        const response = await api.get(`pokemon/${pokemon.pokemonNumberUrl}`);
        const data = await response.data.types.map(
          (item: any) => item.type.name
        );
        if (isMounted) {
          setTypes(data);
        }
      } catch (error) {
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    loadTypes();
    return () => {
      isMounted = false;
    };
  }, []);

  const getType = types.map((item) => item);
  const getColorByType = Object.entries(backgroundColors).filter((item) =>
    item[0] === getType[0] ? item[1] : ""
  );
  const getHexColor = getColorByType.map((item) => item[1]);
  function handleGotoDetails(pokemon: IPokemonsProps): void {
    navigate("Details", {
      pokemon,
      imageUrl: imageURL,
      getHexColor: getHexColor,
      types: types,
    });
  }

  return (
    <Container
      style={{ backgroundColor: `${getHexColor}` }}
      onPress={() => handleGotoDetails(pokemon)}
    >
      {!loading && (
        <Content>
          {/* Identificador de cada pokemon */}
          <PokemonIdentificatorContainer>
            <PokemonIdentificator>
              #{leftZeros(pokemon.pokemonNumberUrl, 3)}
            </PokemonIdentificator>
            {/* Nome Pokemon */}
            <PokemonName>{pokemon.name}</PokemonName>

            {/* Tipo do Pokemon */}

            <TypesContainer>
              {types.map((item) => (
                <Tag key={item} type={item} />
              ))}
            </TypesContainer>
          </PokemonIdentificatorContainer>

          {/* Imagem do Pokemon */}
          <ImageContainer>
            <PokemonImage
              source={{
                uri: imageURL,
              }}
            />
          </ImageContainer>
        </Content>
      )}
    </Container>
  );
};

export default Card;
