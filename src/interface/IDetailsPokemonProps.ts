import { IPokemonsProps } from "./IPokemonsProps";

interface IDetailsRouterProps {
  pokemon: IPokemonsProps;
  imageUrl: string;
  getHexColor: string;
  types: string[];
}

interface IDetailsStatsProps {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface IDetailsAbilitiesProps {
  ability: {
    name: string;
  };
}

interface IDetailsMoreInfoProps {
  height: number;
  weight: number;
}

export {IDetailsRouterProps , IDetailsStatsProps, IDetailsAbilitiesProps,  IDetailsMoreInfoProps }
