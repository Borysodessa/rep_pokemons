import styles from "./Pokemon.module.css";
import { Pokemon } from "./Pokemon";
import { basePokemons } from "./base";

export function PokemonList({ idx }) {
  return (
    <div className={styles.mainWrap}>
      <div className={styles.wrap}>
        {basePokemons.map((pokemon, idx) => (
          <li key={idx}>
            <Pokemon name={basePokemons[idx]} idx={idx + 1} />
          </li>
        ))}
      </div>
    </div>
  );
}
