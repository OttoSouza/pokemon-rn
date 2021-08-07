interface IAbilitiesProps {
  abilityNames: string[];
  pokemonNumberUrl: string;
}

interface IMoreInfoProps {
  height: number;
  weight: number;
}

interface IStatProps {
  base_stat: number;
  name: string;
}

export { IAbilitiesProps, IMoreInfoProps, IStatProps };
