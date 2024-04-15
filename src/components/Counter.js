import styles from "./Pokemon.module.css";

export function Counter(caught) {
  const quantityCaughts = Object.values(caught.caught).filter(
    (el) => el === true
  ).length;
  console.log(quantityCaughts);
  return (
    <h1 className={styles.counterTitle}>
      Поймано покемонов {quantityCaughts} / 20
    </h1>
  );
}
