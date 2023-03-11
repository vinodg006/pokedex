import { Center, Flex, FlexProps } from '@chakra-ui/react';
import { useContext, useEffect, useMemo } from 'react';

import { PaginationContext } from '../../../context/PaginationContext';
import { PokemonsContext } from '../../../context/PokemonsContext';
import {
  POKEMONS_PER_PAGE,
  useGetAllPokemons,
} from '../../../hooks/useGetAllPokemons';
import { IPokemonShortDetails, PokemonCard } from '../pokemonCard/PokemonCard';
import { PokemonCardSkeleton } from '../pokemonCard/PokemonCardSkeleton';

export const PokemonList = () => {
  const { pokemons, setPokemons, setTotalPokemonsCnt } =
    useContext(PokemonsContext);
  const { currentPage } = useContext(PaginationContext);
  const dummyDataList = Array(12).fill(0);

  const { data: pokemonsData, isLoading } = useGetAllPokemons({
    offset: (currentPage - 1) * POKEMONS_PER_PAGE,
  });

  useEffect(() => {
    setPokemons(pokemonsData);
    setTotalPokemonsCnt(pokemonsData?.count || 0);
  }, [pokemonsData, setPokemons, setTotalPokemonsCnt]);

  const generateSkeletons = useMemo(
    () => dummyDataList.map((_, index) => <PokemonCardSkeleton key={index} />),
    [dummyDataList]
  );

  return (
    <Center>
      <Flex {...FlexStyles}>
        {isLoading || !pokemons 
          ? generateSkeletons
          : pokemons &&
            pokemons.results.map(({ name, url }: IPokemonShortDetails) => (
              <PokemonCard key={name} name={name} url={url}></PokemonCard>
            ))}
      </Flex>
    </Center>
  );
};

const FlexStyles: FlexProps = {
  w: '100%',
  gap: '30px',
  wrap: 'wrap',
  align: 'center',
  justify: 'center',
  mt: '28px',
  mb: '48px',
};
