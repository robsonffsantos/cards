import { useEffect, useState } from 'react';
import { fetchPokemon } from '../lib/fetchPokemon';
import { Pokemon } from '../types/PokemonType';
import { PokemonListProps } from '../types/PokemonInterface';
import colours from '../types/Colours';
import typeTranslations from '../types/TypeTranslations';

export default function PokemonList({ count }: PokemonListProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (count > 0) {
      fetchPokemon(5).then((newPokemon) =>
        setPokemonList((prevList) => [...prevList, ...newPokemon])
      );
    } else {
      setPokemonList([]);
    }
  }, [count]);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon) => {
        const primaryType = pokemon.types[0]?.type.name;
        const secondaryType = pokemon.types[1]?.type.name;

        const backgroundColor = secondaryType
          ? `linear-gradient(135deg, ${colours[primaryType]} 50%, ${colours[secondaryType]} 50%)`
          : colours[primaryType];

        return (
          <div
            key={pokemon.id}
            className="pokemon-card"
            style={{ background: backgroundColor }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
            <h2 className="pokemon-title">
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <p className="pokemon-type">
              Tipo: {pokemon.types.map((t) => typeTranslations[t.type.name] || t.type.name).join(', ')}
            </p>
          </div>
        );
      })}
    </div>
  );
}
