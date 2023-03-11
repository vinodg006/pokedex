import { extendTheme } from '@chakra-ui/react';

import { buttonTheme } from './buttonStyles';
import { inputTheme } from './inputStyles';
import { modalTheme } from './modalStyles';
import { selectTheme } from './selectStyles';

export const theme = extendTheme({
  colors: {
    brand: {
      100: '#E6F8FF',
      500: '#04002B',
      900: '#0043C0'
    }
  },
  styles: {
    global: {
      'html, body': {
        color: '#1F0079',
        fontFamily: 'Rubik',
      }
    }
  },
  textStyles: {
    h1: {
      fontSize: '24px',
      fontWeight: 'semibold',
      textTransform: 'uppercase',
      fontStyle: 'italic',
    },
    h3: {
      fontSize: '16px',
      fontWeight: 'semibold',
      textTransform: 'uppercase',
      fontStyle: 'italic',
    },
    h4: {
      fontSize: '16px',
      fontWeight: 'normal',
      color: 'black',
    },
    h5: {
      fontSize: '16px',
      fontWeight: 'thin',
      color: 'black',
      textTransform: 'uppercase',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 'thin',
      color: 'black',
    }
  },
  components: {
    Input: inputTheme,
    Select: selectTheme,
    Button: buttonTheme,
    Modal: modalTheme
  }
})
