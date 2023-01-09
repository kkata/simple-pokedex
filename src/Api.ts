import { PokemonListType } from "./types";

export const BASE_URL = "https://pokeapi.co/api/v2";

export const detailFetcher = (name: string) => async () => {
  const details = await fetch(BASE_URL + "/pokemon/" + name).then((resp) =>
    resp.json()
  );
  // const species = await fetch(details.species.url).then((res) => res.json());

  return {
    ...details,
    // names: species.names,
  };
};

type PageParamType = {
  pageParam?: number;
};

export const listFetcher: () => ({
  pageParam,
}: PageParamType) => Promise<PokemonListType & PageParamType> =
  () =>
  async ({ pageParam = 0 }) => {
    return await fetch(
      BASE_URL + "/pokemon?limit=100&offset=" + pageParam * 100
    )
      .then((res) => res.json())
      .then((res) => ({ ...res, pageParam }));
  };
