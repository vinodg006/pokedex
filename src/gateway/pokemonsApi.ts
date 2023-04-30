import { IPokemonShortDetails } from '../common/components/pokemonCard/PokemonCard';
import { axiosInstance } from './configs/axiosConfig';
import { POKEMON_API_URL } from './configs/baseApiUrls';

export interface IGetAllPokemons {
  offset: number
  limit?: number
}

export interface IGetPokemonById {
  pokemonId: string
}

export interface IPokemons {
  count: number
  next: string | null
  previous: string | null
  results: IPokemonShortDetails[]
}

export interface IPokemonStatsItem {
  base_stat: number
  stat: {
    name: string
  }
}

export interface IPokemon {
  id: number
  name: string
  sprites: {
    front_default: string
  }
  height: number
  weight: number
  abilities: Array<{
    ability: {
      name: string
    }
  }>
  stats: IPokemonStatsItem[]
}

export const pokemonApi = {
  async getAllPokemons({ offset, limit }: IGetAllPokemons): Promise<IPokemons> {
    const { data } = await axiosInstance.get(POKEMON_API_URL, {
      params: {
        offset,
        limit
      }
    })

    return data
  },

  async getPokemonById(pokemonId: string): Promise<IPokemon> {
    const { data } = await axiosInstance.get(
      `${POKEMON_API_URL}/${pokemonId}`,
      {}
    )

    return data
  }
};
