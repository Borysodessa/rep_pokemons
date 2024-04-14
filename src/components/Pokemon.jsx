import { useState } from "react";
import styles from "./Pokemon.module.css";

export function Pokemon({ name, id, idx }) {
  const [caught, setCaugth] = useState();

  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    idx +
    ".png";

  function handleClick() {
    setCaugth(!caught);
  }
  console.log(id);
  const style = {
    backgroundColor: caught ? "red" : "green",
  };

  return (
    <div
      className={styles.colorWrap}
      style={style}
      onClick={() => handleClick()}
    >
      <h2 className={styles.name}>{name}</h2>
      <img className={styles.img} src={url} alt="pokemon_image" />
      <button className={styles.button}>
        {caught ? "отпустить" : "поймать"}
      </button>
    </div>
  );
}
