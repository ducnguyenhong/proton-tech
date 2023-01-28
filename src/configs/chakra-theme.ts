import { extendTheme } from '@chakra-ui/react';

const BreakpointConfig = {
  breakpoints: {
    xs: '320px', // mobile
    sm: '480px',
    md: '768px', // tablet
    lg: '992px',
    xl: '1280px', // desktop
    '2xl': '1600px'
  }
};

const ColorConfig = {
  colors: {
    primary: { 1: '#40407a', 2: '#353564', 3: '#2c2c54' },
    secondary: { 1: '#CF1350', 2: '#a30f3e', 3: '#8c0d35' },
    navBar: { 1: '#3cb863' },
    text: { 1: '#292D32', 2: '#828282' }
  }
};

const FontConfig = {
  fonts: {
    heading: `'Manrope', sans-serif`
  }
};

export const chakraTheme = extendTheme({
  // ...ComponentsTheme,
  ...FontConfig,
  ...ColorConfig,
  ...BreakpointConfig
  // ...MiscConfig,
  // ...GlobalConfig
});
