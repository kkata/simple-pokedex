import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { detailFetcher } from "../Api";
import { assertIsDefined } from "../utils/assert";

export const PokemonDetails = () => {
  const { name } = useParams();
  assertIsDefined(name);
  const { data, isLoading } = useQuery(
    ["pokemon-detail", name],
    detailFetcher(name),
    {
      staleTime: 600_000,
    }
  );

  return <>{!isLoading && JSON.stringify(data)}</>;
};
