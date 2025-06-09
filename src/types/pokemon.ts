export interface PokemonWithMove {
  name: string;
  sprite: string;
  backSprite: string;
  move: {
    name: string;
    power: number;
  };
}
