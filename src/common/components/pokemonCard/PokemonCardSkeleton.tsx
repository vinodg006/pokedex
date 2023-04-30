import { Box, BoxProps, Skeleton, SkeletonText } from '@chakra-ui/react';

export const PokemonCardSkeleton = () => {
  return (
    <Box {...BoxStyles} textStyle="primary">
      <Skeleton h="144px" />
      <SkeletonText mt="18px" noOfLines={2} />
    </Box>
  );
};

const BoxStyles: BoxProps = {
  w: '160px',
  h: '216px',
  rounded: 'xl',
  bg: 'white',
  p: '8px',
  boxShadow: 'lg',
};
