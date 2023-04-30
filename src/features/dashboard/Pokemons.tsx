import { Flex, FlexProps, StackProps, VStack } from '@chakra-ui/react';

import { Pagination } from '../../common/components/pagination/Pagination';
import { PokemonList } from '../../common/components/pokemonList/PokemonList';
import { Search } from '../../common/components/search/Search';
import Background from './../../common/images/background.png';
import PokemonLogo from './../../common/images/pokemonLogo.png';

export const Pokemons = () => {
  return (
    <Flex {...FlexStyles}>
      <VStack {...VStackStyles}>
        <Search />
        <PokemonList />
        <Pagination />
      </VStack>
    </Flex>
  );
};

const FlexStyles: FlexProps = {
  justify: 'center',
  w: '100vw',
  h: '100vh',
  pt: '14px',
  backgroundImage: `url(${PokemonLogo}), url(${Background})`,
  backgroundPosition: '50% 14px, center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto, cover',
  overflowX: 'hidden',
};

const VStackStyles: StackProps = {
  maxWidth: '1110px',
  m: '270px 24px 0',
  justify: 'top',
  align: 'center',
};
