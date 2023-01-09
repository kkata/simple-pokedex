import { useStore } from "../stores";
import { PokemonList } from "./PokemonList";
import styles from "./Pokedex.module.css";
import { observer } from "mobx-react-lite";
import { PokemonType } from "../types";

export const Pokedex = observer(() => {
  const { app } = useStore();

  const filterPokemon = (pokemon: PokemonType) => {
    if (!app.searchQuery.trim()) {
      return true;
    }

    return new RegExp(app.searchQuery, "i").test(pokemon.name);
  };

  return (
    <>
      <input
        placeholder="Enter the name of Pokemon"
        className={styles.input}
        onChange={(e) => app.handleSearchQueryChange(e.target.value)}
      />
      <PokemonList filter={filterPokemon} />
    </>
  );
});
