export async function fetchPokemon(limit: number) {
    const pokemonDetails = await Promise.all(
      Array.from({ length: limit }).map(async () => {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        return await res.json();
      })
    );
    return pokemonDetails;
  }  
    