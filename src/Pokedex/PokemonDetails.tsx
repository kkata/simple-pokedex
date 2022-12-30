import { useQuery } from "react-query";

export const PokemonDetails = ({ name }: { name: string }) => {
  const { data, isLoading } = useQuery(
    ["pokemon-details", name],
    async () => {
      return await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((res) => res.json())
        .then((res) => res);
    },
    {
      staleTime: 600_000,
    }
  );

  return <>{!isLoading && JSON.stringify(data)}</>;
};
