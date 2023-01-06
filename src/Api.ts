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

export const listFetcher = () => async () => {
  return await fetch(BASE_URL + "/pokemon?limit=100&offset=0").then((res) =>
    res.json()
  );
};
