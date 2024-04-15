import { useState } from "react";
import styles from "./Pokemon.module.css";
import { Pokemon } from "./Pokemon";
import { basePokemons } from "./base";
import { Counter } from "./Counter";

const obj = {};
for (let i = 0; i < basePokemons.length; i += 1) {
  obj[basePokemons[i].id] = false;
}

export function PokemonList() {
  const [caught, setCaugth] = useState(obj);

  function handleClick(id) {
    const newCaught = { ...caught };
    newCaught[id] = !newCaught[id];
    setCaugth(newCaught);
  }

  return (
    <div className={styles.mainWrap}>
      <Counter caught={caught} />
      <div className={styles.wrap}>
        {basePokemons.map((pokemon, idx) => (
          <li key={idx}>
            <Pokemon
              handleClick={() => handleClick(pokemon.id)}
              name={pokemon.name}
              id={pokemon.id}
              caught={caught[pokemon.id]}
            />
          </li>
        ))}
      </div>
    </div>
  );
}
