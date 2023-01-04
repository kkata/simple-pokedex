import { CSSProperties } from "react";
import styles from "./Skeleton.module.css";

export const Skelton = ({ style }: { style: CSSProperties }) => {
  return <div className={styles.skelton} style={style} />;
};
