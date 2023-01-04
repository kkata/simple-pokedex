import { useQuery } from "react-query";
import { PokemonListType, PokemonType } from "../types";
import { PokemonListItemWrapper } from "./PokemonListItem";

export const PokemonList = () => {
  const { data, isLoading, isSuccess } = useQuery<PokemonListType, boolean>(
    "pokemon-list",
    async () => {
      return await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
      ).then((res) => res.json());
    },
    {
      staleTime: 600_000,
    }
  );

  return (
    <>
      {!isLoading &&
        isSuccess &&
        data.results.map((item: PokemonType) => (
          <PokemonListItemWrapper key={item.name} {...item} />
        ))}
    </>
  );
};
