import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { listFetcher } from "../Api";
import { PokemonListType, PokemonType } from "../types";
import { PokemonListItemWrapper } from "./PokemonListItem";
import styles from "./PokemonList.module.css";
import { observer } from "mobx-react-lite";

export const PokemonList = observer(
  ({ filter }: { filter: (pokemon: PokemonType) => boolean }) => {
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
          data.results.filter(filter).map((item: PokemonType) => (
            <Link
              to={`/details/${item.name}`}
              key={item.name}
              className={styles["pokemon-link"]}
            >
              <PokemonListItemWrapper {...item} />
            </Link>
          ))}
      </>
    );
  }
);
