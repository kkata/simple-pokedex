import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { listFetcher } from "../Api";
import { PokemonType } from "../types";
import { PokemonListItemWrapper } from "./PokemonListItem";
import styles from "./PokemonList.module.css";
import { observer } from "mobx-react-lite";
import { assertIsDefined } from "../utils/assert";

export const PokemonList = observer(
  ({ filter }: { filter: (pokemon: PokemonType) => boolean }) => {
    const { data, isLoading, isSuccess, fetchNextPage, hasNextPage } =
      useInfiniteQuery("pokemon-list", listFetcher(), {
        staleTime: 600_000,
        getNextPageParam: (lastPage) => {
          if (lastPage.next !== null) {
            assertIsDefined(lastPage.pageParam);
            return lastPage.pageParam + 1;
          }
        },
      });

    return (
      <>
        {!isLoading &&
          isSuccess &&
          data.pages.map((dataItem) =>
            dataItem.results.filter(filter).map((item: PokemonType) => (
              <Link
                to={`/details/${item.name}`}
                key={item.name}
                className={styles["pokemon-link"]}
              >
                <PokemonListItemWrapper {...item} />
              </Link>
            ))
          )}
        {hasNextPage && (
          <button
            className={styles["load-more-btn"]}
            onClick={() => fetchNextPage()}
          >
            Load more
          </button>
        )}
      </>
    );
  }
);
