import { Skelton } from "../../Skelton";

import styles from "./PokemonListItem.module.css";

export const SkeltonListItem = () => {
  return (
    <div className={styles["item-container"]}>
      <Skelton style={{ width: 96, height: 96 }} />
      <div className={styles["item-content"]}>
        <Skelton style={{ width: 120, height: 21 }} />
        <Skelton style={{ width: 256, height: 21 }} />
      </div>
    </div>
  );
};
