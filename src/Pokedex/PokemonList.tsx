import { useQuery } from "react-query";
import { listFetcher } from "../Api";
import { PokemonListType, PokemonType } from "../types";
import { PokemonListItemWrapper } from "./PokemonListItem";

export const PokemonList = () => {
  const { data, isLoading, isSuccess } = useQuery<PokemonListType, boolean>(
    "pokemon-list",
    listFetcher(),
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
