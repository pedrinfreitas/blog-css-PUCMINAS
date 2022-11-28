import type { IPokemonAPI } from "src/stores/pokestore.model";

export async function get({ params }) {
  const { id } = params;
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);

  const pokemonDetails = await res.json();

  return {
    status: 200,
    body: pokemonDetails,
  };
}
