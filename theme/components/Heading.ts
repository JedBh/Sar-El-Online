import { ThemeComponents } from '@chakra-ui/react'

const Heading: ThemeComponents['Heading'] = {
  baseStyle: {},
  variants: {
    gradient: {
      bg: '-webkit-linear-gradient(360deg, #2D245F, #60B7BD)',
      fill: 'transparent',
      backgroundClip: 'text',
      fontWeight: 'black',
      lineHeight: '0.97px',
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

export default Heading
