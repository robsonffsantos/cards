"use client";

import { useState } from 'react';
import PokemonList from '@/components/pokemonList';

export default function Home() {
  const [pokemonCount, setPokemonCount] = useState(0);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <div className="max-w-lg w-full bg-white shadow-md rounded-lg p-4 text-center">
        <h1 className="text-2xl font-bold mb-4 text-black">Cards Pokémon</h1>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => setPokemonCount(pokemonCount + 5)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Carregar Lista
          </button>
          <button
            onClick={() => setPokemonCount(0)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Restart
          </button>
        </div>
      </div>
      <PokemonList count={pokemonCount} />
    </main>
  );
}
