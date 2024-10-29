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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-6 w-full max-w-5xl">
      {pokemonList.map((pokemon) => {
        const primaryType = pokemon.types[0]?.type.name;
        const secondaryType = pokemon.types[1]?.type.name;

        const backgroundColor = secondaryType
          ? `linear-gradient(135deg, ${colours[primaryType]} 50%, ${colours[secondaryType]} 50%)`
          : colours[primaryType];

        return (
          <div
            key={pokemon.id}
            className="border rounded-lg p-4 shadow-md text-white flex flex-col items-center"
            style={{ background: backgroundColor }}
          >
            <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-20 h-20 mb-2" />
            <h2 className="text-l font-semibold">
              #{pokemon.id} {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <p className="text-white">
              Tipo: {pokemon.types.map((t) => typeTranslations[t.type.name] || t.type.name).join(', ')}
            </p>
          </div>
        );
      })}
    </div>
  );
}
