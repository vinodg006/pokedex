import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const narrow = definePartsStyle({
  dialog: {
    width: '300px',
    borderRadius: '3xl',
    textAlign: 'center',
  }
});

export const modalTheme = defineMultiStyleConfig({
  variants: { narrow }
});
