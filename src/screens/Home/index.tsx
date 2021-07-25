import React, { useEffect, useState } from "react";
import { Container, WrapperPokemon } from "./styles";
import Input from "../../components/Input";
import Card from "../../components/Card";
import { FlatList, View } from "react-native";
import { api } from "../../services/api";
import { Header } from "../../components/Header";
import LoadAnimation from "../../components/LoadAnimation";
import { IPokemonsProps } from "../../interface";

export const Home: React.FC = () => {
  const [data, setData] = useState<IPokemonsProps[]>([]);
  const [isVisible, setIsVisivle] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchName, setSearchName] = useState<string>("");
  const [page, setPage] = useState(1);
  function inputVisible(): void {
    setIsVisivle(!isVisible);
  }

  const loadPokemonData = async () => {
    try {
      const response = await api.get(`pokemon?limit=${page}`);
      const data = await response.data;
      const pokemons = data.results.map((item: IPokemonsProps) => {
        return {
          name: item.name.toUpperCase(),
          url: item.url,
          pokemonNumberUrl: item.url
            .replace("https://pokeapi.co/api/v2/pokemon/", "")
            .replace("/", ""),
        };
      });
      setData(pokemons);
      setPage(page + 5);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

 

  const filterPokemon = data.filter((pok) =>
    pok.name.toLowerCase().includes(searchName.toLocaleLowerCase())
  );

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      setTimeout(() => {
        loadPokemonData();
      }, 2000);
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Container>
      <Header inputVisible={inputVisible} />
      {isVisible ? (
        <Input
          placeholder="Digite o nome do pokemon"
          value={searchName}
          onChangeText={setSearchName}
        />
      ) : (
        <View />
      )}

      {isLoading ? (
        <LoadAnimation height={100} width={100} />
      ) : (
        <WrapperPokemon isInputVisible={isVisible}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={filterPokemon}
            keyExtractor={(item) => item.pokemonNumberUrl}
            renderItem={({ item: pokemon }) => <Card pokemon={pokemon} />}
            onEndReached={loadPokemonData}
            ListFooterComponent={<LoadAnimation height={24} width={24} />}
            initialNumToRender={5}
            windowSize={5}
            maxToRenderPerBatch={5}
            updateCellsBatchingPeriod={5}
            removeClippedSubviews={false}
            onEndReachedThreshold={0.1}
            
          />
        </WrapperPokemon>
      )}
    </Container>
  );
};
