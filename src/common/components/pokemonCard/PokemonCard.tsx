import { Box, BoxProps, Text, TextProps } from '@chakra-ui/react';
import { memo, useCallback, useMemo, useState } from 'react';

import { useGetPokemonById } from '../../../hooks/useGetPokemonById';
import { PokemonModal } from '../pokemonModal/PokemonModal';
import { PokemonImage } from './components/PokemonImage';

export interface IPokemonShortDetails {
  name: string;
  url: string;
}

export const PokemonCard = memo(({ name, url }: IPokemonShortDetails) => {
  const idFromUrl = useMemo(() => url.split('pokemon/')[1], [url]);
  const { data: pokemon } = useGetPokemonById(idFromUrl);
  const imageUrl = pokemon?.sprites?.front_default || '';
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const openModal = useCallback(() => setModalVisible(true), []);
  const closeModal = useCallback(() => setModalVisible(false), []);

  return (
    <Box {...BoxStyles} textStyle="primary" onClick={openModal}>
      <PokemonImage url={imageUrl} />
      <Text textStyle="h3" as="h3" {...TextStyles}>
        {name}
      </Text>
      {pokemon != null && isModalVisible && (
        <PokemonModal pokemon={pokemon} onClose={closeModal} />
      )}
    </Box>
  );
});

const BoxStyles: BoxProps = {
  w: '160px',
  p: '8px',
  boxShadow: '4px 4px 1px rgba(0, 67, 192, 0.42)',
  cursor: 'pointer',
  rounded: 'xl',
  _hover: {
    transform: 'scale(1.1)',
  },
  bg: 'white',
};

const TextStyles: TextProps = {
  align: 'center',
  mt: '18px',
  my: '16px',
};
