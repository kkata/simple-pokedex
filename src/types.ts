export type PokemonType = {
  name: string;
  url: string;
};

export type PokemonListType = {
  count: number;
  next: string;
  previous: string;
  results: PokemonType[];
};
