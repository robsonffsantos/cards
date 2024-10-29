"use client";

import { useState } from 'react';
import PokemonList from '@/components/pokemonList';

export default function Home() {
  const [pokemonCount, setPokemonCount] = useState(0);

  return (
    <main className="main-container">
      <div className="content-card">
        <h1 className="main-title">Cards Pokémon</h1>
        <div className="flex justify-between space-x-4">
          <button
            onClick={() => setPokemonCount(pokemonCount + 5)}
            className="button button-blue"
          >
            Carregar Lista
          </button>
          <button
            onClick={() => setPokemonCount(0)}
            className="button button-red"
          >
            Restart
          </button>
        </div>
      </div>
      <PokemonList count={pokemonCount} />
    </main>
  );
}
