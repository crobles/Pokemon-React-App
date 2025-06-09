import { useState, useEffect } from "react";
import axios from "axios";
import { PokemonWithMove } from "../types/pokemon";

const getRandomPokemonId = () => Math.floor(Math.random() * 151) + 1;

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonWithMove | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomPokemon = async () => {
    setLoading(true);
    try {
      const id = getRandomPokemonId();
      const { data: pokemonData } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      const moves = pokemonData.moves.filter((m: any) => m.move.name);
      const randomMove = moves[Math.floor(Math.random() * moves.length)];

      const { data: moveData } = await axios.get(randomMove.move.url);
      const power = moveData.power || 0;

      const formatted: PokemonWithMove = {
        name: pokemonData.name,
        sprite: pokemonData.sprites.front_default,
        backSprite: pokemonData.sprites.back_default,
        move: {
          name: moveData.name,
          power,
        },
      };

      setPokemon(formatted);
    } catch (err) {
      console.error("Error fetching Pokémon", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomPokemon();
  }, []);

  return { pokemon, loading, refetch: fetchRandomPokemon };
};
