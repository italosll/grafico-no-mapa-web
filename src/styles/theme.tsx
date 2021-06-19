import { extendTheme } from '@chakra-ui/react';
import '@fontsource/sen';

const theme = extendTheme({
  colors: {
    gray: '#A9A9A9',
    red: '#FF0000',
    white: '#FFFFFF',
    blue: '#3769FF',
    lightblue: '#4E7AFF',
    dark: '#292929',
  },
  fonts: {
    body: 'sen',
  },
});

export default theme;
