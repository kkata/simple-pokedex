import { useQuery } from "react-query";
import { detailFetcher } from "../../Api";
import { PokemonListItem } from "./PokemonListItem";
import { SkeltonListItem } from "./SkeltonListItem";

export const PokemonListItemWrapper = ({ name }: { name: string }) => {
  const { data, isLoading, isSuccess } = useQuery(
    ["pokemon-detail", name],
    detailFetcher(name),
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
