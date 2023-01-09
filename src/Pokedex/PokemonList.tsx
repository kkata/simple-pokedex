import { useInfiniteQuery } from "react-query";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { listFetcher } from "../Api";
import { PokemonListItemWrapper } from "./PokemonListItem";
import { assertIsDefined } from "../utils/assert";
import { useStore } from "../stores";
import { PokemonType } from "../types";
import styles from "./PokemonList.module.css";

export const PokemonList = observer(
  ({ filter }: { filter: (pokemon: PokemonType) => boolean }) => {
    const { app } = useStore();

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

    useEffect(() => {
      window.scrollTo(0, app.scrollPosition);
    }, [app]);

    const handlePokemonClick = () => {
      app.handleScrollPositionChange(window.scrollY);
    };

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
                onClick={handlePokemonClick}
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
