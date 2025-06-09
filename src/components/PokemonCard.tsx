import React from "react";
import { motion } from "framer-motion";
import { PokemonWithMove } from "../types/pokemon";

interface PokemonCardProps {
  pokemon: PokemonWithMove;
  isBack?: boolean;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  isBack = false,
}) => {
  return (
    <motion.div
      className="pokemon-card"
      style={{
        padding: "1.5rem",
        borderRadius: "16px",
        textAlign: "center",
        width: "220px",
        margin: "0 auto",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img
        src={isBack ? pokemon.backSprite : pokemon.sprite}
        alt={pokemon.name}
        style={{ width: 96, height: 96 }}
      />
      <h3
        style={{
          textTransform: "capitalize",
          fontSize: "1.5rem",
          margin: "0.5rem 0",
        }}
      >
        {pokemon.name}
      </h3>
      <p style={{ margin: "0.25rem 0" }}>
        <strong>Move:</strong> {pokemon.move.name}
      </p>
      <p style={{ margin: "0.25rem 0" }}>
        <strong>Power:</strong> {pokemon.move.power}
      </p>
    </motion.div>
  );
};

export default PokemonCard;
