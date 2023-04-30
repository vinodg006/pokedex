import { inputAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

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
    }
  }
})

const search = definePartsStyle({
  field: {
    h: '60px',
    border: '2px solid brand.900',
    rounded: '2xl',
    bg: 'white',
    width: 'min(90vw, 720px)',
    _focus: {
      ring: '1px',
      ringColor: 'blue.400',
      ringOffset: '2px',
      ringOffsetColor: 'blue.200',
    }
  },
  element: {
    h: '60px',
  }
});

export const inputTheme = defineMultiStyleConfig({
  variants: { withShadow, search }
});
