import { ThemeComponents } from '@chakra-ui/react'

const Text: ThemeComponents['Text'] = {
  baseStyle: {
    m: 0,
    lineHeight: 1.6,
  },
  variants: {
    primary: {
      color: 'darkBlue.500',
    },
    secondary: {
      color: '#fff',
    },
    cursive: {
      fontFamily: 'Brittish-Shorthair',
      textShadow: '0px 0px, 1px 0px, 0px 1px',
    },
  },
  sizes: {
    xs: {
      fontSize: ['xs', null, 'sm', null, 'md'],
    },
    sm: {
      fontSize: ['sm', null, 'md', null, 'lg'],
    },
    md: {
      fontSize: ['md', null, 'lg', null, 'xl'],
    },
    lg: {
      fontSize: ['lg', null, 'xl', null, '2xl'],
    },
    xl: {
      fontSize: ['xl', null, '2xl', null, '3xl'],
    },
    xl2: {
      fontSize: ['2xl', null, '3xl', null, '4xl'],
    },
    xl3: {
      fontSize: ['3xl', null, '4xl', null, '5xl'],
    },
    xl4: {
      fontSize: ['4xl', null, '5xl', null, '6xl'],
    },
    xl5: {
      fontSize: ['5xl', null, '6xl', null, '7xl'],
    },
    xl6: {
      fontSize: ['6xl', null, '7xl', null, '8xl'],
    },
    xl7: {
      fontSize: ['7xl', null, '8xl', null, '9xl'],
    },
  },
}

export default Text
