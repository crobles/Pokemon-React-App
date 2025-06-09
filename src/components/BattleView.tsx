import React, { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import PokemonCard from "./PokemonCard";
import { getWinner } from "../utils/battleLogic";
import BattleLog from "./BattleLog";

import background from "../images/background.jpg";

const BattleView: React.FC = () => {
  const pokemon1 = usePokemon();
  const pokemon2 = usePokemon();

  const [battleLog, setBattleLog] = useState("");

  const handleStartBattle = () => {
    if (pokemon1.pokemon && pokemon2.pokemon) {
      const result = getWinner(pokemon1.pokemon, pokemon2.pokemon);
      setBattleLog(result);
    }
  };

  const handleReset = () => {
    pokemon1.refetch();
    pokemon2.refetch();
    setBattleLog("");
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>Pokémon Battle!</h2>

      {}
      <div
        style={{
          border: "2px solid #ddd",
          borderRadius: "16px",
          padding: "2rem",
          height: 440,
          width: 420,
          position: "relative",
          margin: "2rem auto",
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        {}
        <div
          style={{
            position: "absolute",
            top: 120,
            right: -20,
            transform: "scale(1.05)",
            zIndex: 1,
            backgroundColor: "transparent",
          }}
        >
          {pokemon1.loading ? (
            <p>Loading...</p>
          ) : (
            pokemon1.pokemon && <PokemonCard pokemon={pokemon1.pokemon} />
          )}
        </div>

        {}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: -40,
            transform: "scale(1.05)",
            zIndex: 2,
            backgroundColor: "transparent",
          }}
        >
          {pokemon2.loading ? (
            <p>Loading...</p>
          ) : (
            pokemon2.pokemon && (
              <PokemonCard pokemon={pokemon2.pokemon} isBack />
            )
          )}
        </div>
      </div>

      {}
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={handleStartBattle}
          disabled={pokemon1.loading || pokemon2.loading}
        >
          Start Battle
        </button>
        <button onClick={handleReset} style={{ marginLeft: "1rem" }}>
          Reset
        </button>
      </div>

      {}
      <BattleLog log={battleLog} />
    </div>
  );
};

export default BattleView;
