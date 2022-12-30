import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export const PokemonList = () => {
  const { data, isLoading } = useQuery(
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
        data.results.map((e: any) => (
          <div key={e.name}>
            <Link to={`/details/${e.name}`}>{e.name}</Link>
          </div>
        ))}
    </>
  );
};
