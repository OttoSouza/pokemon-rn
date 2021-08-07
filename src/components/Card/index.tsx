import React, { useEffect, useState } from "react";
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
import { Tag } from "../Tag";
import { useNavigation } from "@react-navigation/native";
import { ICardProps, IPokemonsProps } from "../../interface/IPokemonsProps";
import { Alert } from "react-native";
import { ERROR_LOADING_TYPES } from "../../Errors/messages";
import { api } from "../../services/api";
import { leftZeros } from "../../utils/leftZeros";
import { getAllBackgroundByTypes } from "../../utils/getAllBackgroundByType";

export const Card: React.FC<ICardProps> = ({ pokemon }) => {
  const { navigate } = useNavigation();
  const [types, setTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const formattedPokemonNumber = leftZeros(pokemon.pokemonNumberUrl, 3);
  const getHexColor = getAllBackgroundByTypes(types);
  const imageURL = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formattedPokemonNumber}.png`;

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
        Alert.alert(`${ERROR_LOADING_TYPES}`);
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
              #{formattedPokemonNumber}
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
