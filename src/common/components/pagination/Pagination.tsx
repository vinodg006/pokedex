import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Flex,
  FlexProps,
  IconButton,
} from '@chakra-ui/react';
import { useCallback, useContext } from 'react';

import { PaginationContext } from '../../../context/PaginationContext';
import { PokemonsContext } from '../../../context/PokemonsContext';
import { POKEMONS_PER_PAGE } from '../../../hooks/useGetAllPokemons';
import { DOTS, usePagination } from '../../../hooks/usePagination';

export const Pagination = () => {
  const { totalPokemonsCnt } = useContext(PokemonsContext);
  const { currentPage, setCurrentPage } = useContext(PaginationContext);
  const paginatedPagesList = usePagination({
    itemsTotal: totalPokemonsCnt,
    itemsPerPage: POKEMONS_PER_PAGE,
  });

  const handleNext = useCallback(() => {
    setCurrentPage(currentPage + 1);
  }, [currentPage, setCurrentPage]);

  const handlePrevious = useCallback(() => {
    setCurrentPage(currentPage - 1);
  }, [currentPage, setCurrentPage]);

  if (currentPage === 0 || (paginatedPagesList?.length || []) < 2) {
    return null;
  }

  const isPreviousDisabled = paginatedPagesList != null && currentPage === 1;
  const isNextDisabled =
    paginatedPagesList != null &&
    currentPage === paginatedPagesList[paginatedPagesList.length - 1];

  const renderPaginatedPages = () =>
    paginatedPagesList != null &&
    paginatedPagesList.map((pageIndex) =>
      pageIndex === DOTS ? (
        <Box key={pageIndex} {...BoxStyles}>{pageIndex}</Box>
      ) : (
        <Button
          {...ButtonStyles}
          bg={currentPage === pageIndex ? 'brand.900' : 'white'}
          color={currentPage === pageIndex ? 'white' : 'brand.500'}
          onClick={() => setCurrentPage(pageIndex as number)}
          key={pageIndex}
        >
          {pageIndex}
        </Button>
      )
    );

  return (
    <Flex>
      <IconButton
        {...ButtonStyles}
        onClick={handlePrevious}
        disabled={isPreviousDisabled}
        aria-label="Previous Page"
        icon={<ArrowLeftIcon color="white" />}
      />
      <Flex {...FlexStyles}>{renderPaginatedPages()}</Flex>
      <IconButton
        {...ButtonStyles}
        onClick={handleNext}
        aria-label="Next Page"
        disabled={isNextDisabled}
        icon={<ArrowRightIcon color="white" />}
      />
    </Flex>
  );
};

const ButtonStyles: ButtonProps = {
  w: '56px',
  h: '56px',
  bg: 'brand.900',
  rounded: 'lg',
  _hover: {
    bg: 'blue.400',
    color: 'white',
  },
};

const FlexStyles: FlexProps = {
  rounded: 'lg',
  m: '0 16px 16px',
  bg: 'white',
};

const BoxStyles: BoxProps = {
  w: '40px',
  h: '40px',
  pt: '12px',
  textAlign: 'center',
  cursor: 'default',
};
