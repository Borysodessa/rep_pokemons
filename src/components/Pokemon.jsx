import styles from "./Pokemon.module.css";

export function Pokemon({ name, id, caught, handleClick }) {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
    id +
    ".png";

  const style = {
    backgroundColor: caught ? "red" : "green",
  };

  return (
    <div
      className={styles.colorWrap}
      style={style}
      onClick={() => handleClick(id)}
    >
      <h2 className={styles.name}>{name}</h2>
      <img className={styles.img} src={url} alt="pokemon_image" />
      <button className={styles.button}>
        {caught ? "отпустить" : "поймать"}
      </button>
    </div>
  );
}
