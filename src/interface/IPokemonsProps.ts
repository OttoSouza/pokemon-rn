export interface IPokemonsProps {
  name: string;
  url: string;
  pokemonNumberUrl: string;
}

export interface ICardProps { 
  pokemon: IPokemonsProps;
}