import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const rounded = defineStyle({
  background: 'brand.900',
  color: 'white',
  fontWeight: 'semibold',
  p: '23px 67px',
  rounded: '3xl',
  h: '60px',
  _hover: {
    background: 'blue.400',
    transform: 'scale(1.1)',
  }
});

export const buttonTheme = defineStyleConfig({
  variants: { rounded }
});
