import React, { useEffect, useState } from "react";

import {
  Container,
  Header,
  BackButton,
  ContentInformartion,
  Wrapper,
  PokemonIdentificator,
  PokemonName,
  Content,
  PokemonImageContainer,
  PokemonImage,
  TypesContainer,
  AbilityMenu,
  AbilityTitle,
  StatContainer,
  Menu,
  AboutContainer,
  AboutContent,
  AboutName,
  AboutInfo,
} from "./styles";

import { useRoute, useNavigation } from "@react-navigation/native";
import { Alert, View } from "react-native";
import { StatComponent } from "../../components/PokemonDetails/Stat/index";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Tag } from "../../components/Tag";
import {
  ERROR_LOADING_ABILITIES,
  ERROR_LOADING_SOME_EXTRA_INFORMATIONS,
  ERROR_LOADING_STAT,
} from "../../Errors/messages";
import {
  IDetailsStatsProps,
  IDetailsAbilitiesProps,
  IDetailsMoreInfoProps,
  IDetailsRouterProps,
} from "../../interface/IDetailsPokemonProps";
import { leftZeros } from "../../utils/leftZeros";
import { api } from "../../services/api";

const Details: React.FC = () => {
  const routes = useRoute();
  const [stats, setStats] = useState<IDetailsStatsProps[]>([]);
  const [ability, setAbility] = useState<IDetailsAbilitiesProps[]>([]);
  const [moreInfo, setMoreInfo] = useState<IDetailsMoreInfoProps[]>([]);
  const [active, setActive] = useState(false);
  const { pokemon, imageUrl, getHexColor, types } =
    routes.params as IDetailsRouterProps;
  const abilityNames = ability.map((item) => item.ability.name + ". ");

  const [typeMenu, setTypeMenu] = useState<"about" | "base">();
  const { goBack } = useNavigation();

  function handleGoToHome() {
    goBack();
  }

  const loadPokemonStats = async () => {
    try {
      const response = await api.get(`pokemon/${pokemon.pokemonNumberUrl}`);
      const data = await response.data.stats.map((item: IDetailsStatsProps) => {
        return {
          base_stat: item.base_stat,
          stat: {
            name: item.stat.name,
          },
        };
      });
      setStats(data);
    } catch (error) {
      Alert.alert(`${ERROR_LOADING_STAT}`);
    }
  };

  const loadPokemonAbility = async () => {
    try {
      const response = await api.get(`pokemon/${pokemon.pokemonNumberUrl}`);
      const data = await response.data.abilities.map(
        (item: IDetailsAbilitiesProps) => {
          return {
            ability: {
              name: item.ability.name,
            },
          };
        }
      );
      setAbility(data);
    } catch (error) {
      Alert.alert(`${ERROR_LOADING_ABILITIES}`);
    }
  };

  const loadPokemonMoreInformations = async () => {
    try {
      const response = await api.get(`pokemon/${pokemon.pokemonNumberUrl}`);
      const height = await response.data.height;
      const weight = await response.data.weight;
      setMoreInfo([{ height, weight }]);
    } catch (error) {
      Alert.alert(`${ERROR_LOADING_SOME_EXTRA_INFORMATIONS}`);
    }
  };

  useEffect(() => {
    loadPokemonStats();
    loadPokemonAbility();
    loadPokemonMoreInformations();
  }, []);

  function handleActive(typeMenu: "about" | "base") {
    setActive(!active);
    setTypeMenu(typeMenu);
  }

  return (
    <Container style={{ backgroundColor: `${getHexColor}` }}>
      <Header>
        <BackButton onPress={handleGoToHome}>
          <Icon name="arrow-back-ios" size={16} color="#fff" />
        </BackButton>
        <ContentInformartion>
          <Wrapper>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypesContainer>
              <Tag key={types[0]} type={types[0]} />
              <Tag key={types[1]} type={types[1]} />
            </TypesContainer>
          </Wrapper>
          <PokemonIdentificator>
            #{leftZeros(pokemon.pokemonNumberUrl, 3)}
          </PokemonIdentificator>
        </ContentInformartion>
      </Header>

      <Content>
        <PokemonImageContainer>
          <PokemonImage source={{ uri: imageUrl }} />
        </PokemonImageContainer>

        <Menu style={{ borderBottomColor: `${getHexColor}` }}>
          <AbilityMenu
            onPress={() => {
              handleActive("about");
            }}
          >
            <AbilityTitle>About</AbilityTitle>
          </AbilityMenu>
          <AbilityMenu
            onPress={() => {
              handleActive("base");
            }}
          >
            <AbilityTitle>Base Stats</AbilityTitle>
          </AbilityMenu>
        </Menu>

        {active && typeMenu === "base" ? (
          <StatContainer>
            {stats.map((stat) => (
              <StatComponent
                base_stat={stat.base_stat}
                name={stat.stat.name}
                key={stat.stat.name}
              />
            ))}
          </StatContainer>
        ) : (
          <AboutContainer>
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
          </AboutContainer>
        )}
      </Content>
    </Container>
  );
};

export default Details;
