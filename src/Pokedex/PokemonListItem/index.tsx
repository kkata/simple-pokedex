import { useQuery } from "react-query";
import { PokemonListItem } from "./PokemonListItem";
import { SkeltonListItem } from "./SkeltonListItem";

export const PokemonListItemWrapper = ({ name }: { name: string }) => {
  const { data, isLoading, isSuccess } = useQuery(
    ["pokemon-sprites", name],
    async () => {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(
        (resp) => resp.json()
      );
    },
    { staleTime: 600_000 }
  );
  return (
    <>
      {!isLoading && isSuccess ? (
        <PokemonListItem data={data} />
      ) : (
        <SkeltonListItem />
      )}
    </>
  );
};
