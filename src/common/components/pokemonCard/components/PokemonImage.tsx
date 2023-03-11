import { Box, BoxProps, Image, ImageProps } from '@chakra-ui/react';

import BackGroundImage from '../../../images/pokemonShine.svg';

interface IPokemonImage {
  url: string;
}

export const PokemonImage = ({ url }: IPokemonImage) => {
  return (
    <Box {...BoxStyles}>
      {url && <Image src={url} alt="Pokemon" {...ImageStyles} />}
    </Box>
  );
};

const BoxStyles: BoxProps = {
  boxSize: '144px',
  backgroundImage: `url(${BackGroundImage})`,
  border: '1px solid brand.100',
  rounded: 'xl',
};

const ImageStyles: ImageProps = {
  w: '100%',
};
