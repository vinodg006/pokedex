import { useQuery } from 'react-query';

import { GET_ALL_POKEMONS } from '../gateway/configs/queriesNames';
import { IGetAllPokemons, pokemonApi } from '../gateway/pokemonsApi';
import { FIVE_MINS_IN_MS } from './useGetPokemonById';

export const POKEMONS_PER_PAGE = 12

export const useGetAllPokemons = ({
  offset,
  limit = POKEMONS_PER_PAGE
}: IGetAllPokemons) =>
  useQuery(
    [GET_ALL_POKEMONS, offset],
    async () => await pokemonApi.getAllPokemons({ offset, limit }),
    {
      keepPreviousData: true,
      staleTime: FIVE_MINS_IN_MS
    }
  )
