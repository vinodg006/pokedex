import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys)

const withShadow = definePartsStyle({
  field: {
    h: '60px',   
    backgroundColor: '#fff',
    border: '1px solid blue',
    rounded: 'md',
    _focus: {
      ring: '1px',
      ringColor: 'blue.400',
      ringOffset: '2px',
      ringOffsetColor: 'blue.200',
    },
    option: {
    backgroundColor: '#fff',
      
    }
  },
  icon: {
    color: 'blue.400',
  }
});

export const selectTheme = defineMultiStyleConfig({
  variants: { withShadow }
});
