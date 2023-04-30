import { useQuery } from 'react-query';

import { GET_POKEMON_BY_ID } from '../gateway/configs/queriesNames';
import { pokemonApi } from '../gateway/pokemonsApi';

export const FIVE_MINS_IN_MS = 300000

export const useGetPokemonById = (pokemonId: string) =>
  useQuery(
    [GET_POKEMON_BY_ID, pokemonId],
    async () => await pokemonApi.getPokemonById(pokemonId),
    {
      staleTime: FIVE_MINS_IN_MS
    }
  )
