import { PokemonWithMove } from "../types/pokemon";

export function getWinner(p1: PokemonWithMove, p2: PokemonWithMove): string {
  const power1 = p1.move.power;
  const power2 = p2.move.power;

  if (power1 > power2) {
    return `${capitalize(p1.name)} lands a decisive blow with ${
      p1.move.name
    }, knocking out ${capitalize(p2.name)}!`;
  } else if (power2 > power1) {
    return `${capitalize(p2.name)} lands a decisive blow with ${
      p2.move.name
    }, knocking out ${capitalize(p1.name)}!`;
  } else {
    return `Draw`;
  }
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
