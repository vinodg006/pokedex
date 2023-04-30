import { SearchIcon } from '@chakra-ui/icons';
import {
  IconProps,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useCallback, useContext } from 'react';
import { useQueryClient } from 'react-query';

import { GET_ALL_POKEMONS } from '../../../gateway/configs/queriesNames';
import { IPokemons } from '../../../gateway/pokemonsApi';
import { PaginationContext } from '../../../context/PaginationContext';
import { PokemonsContext } from '../../../context/PokemonsContext';
import { POKEMONS_PER_PAGE } from '../../../hooks/useGetAllPokemons';

export const Search = () => {
  const queryClient = useQueryClient();
  const { setPokemons } = useContext(PokemonsContext);
  const { currentPage } = useContext(PaginationContext);

  const previousPokemonData: IPokemons | undefined = queryClient.getQueryData([
    GET_ALL_POKEMONS,
    (currentPage - 1) * POKEMONS_PER_PAGE,
  ]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const searchValue = event.target.value;

      const filteredData = (): IPokemons | undefined => {
        if (previousPokemonData != null) {
          if (!searchValue) return previousPokemonData;
          return {
            ...previousPokemonData,
            results: previousPokemonData.results.filter((pokemon) =>
              pokemon.name.includes(searchValue)
            ),
          };
        }

        return undefined;
      };

      if (filteredData() != null) setPokemons(filteredData);
    },
    [previousPokemonData, setPokemons]
  );

  return (
    <InputGroup variant="search" w="unset">
      <InputLeftElement children={<SearchIcon {...IconStyles} />} />

      <Input onInput={handleSearch} />
    </InputGroup>
  );
};

const IconStyles: IconProps = {
  w: '23px',
  h: '23px',
  m: '0 auto',
  color: 'blue.600',
};
