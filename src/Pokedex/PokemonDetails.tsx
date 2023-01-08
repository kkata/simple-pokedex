import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { detailFetcher } from "../Api";
import { assertIsDefined } from "../utils/assert";
import { PokemonListItem } from "./PokemonListItem/PokemonListItem";
import styles from "./PokemonDetails.module.css";

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

  return (
    <>
      <Link to="/" className={styles["nav-bar"]}>
        {" "}
        Back to list{" "}
      </Link>
      {!isLoading && <PokemonListItem data={data} />}
    </>
  );
};
