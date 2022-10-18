import type { ThemeComponents } from '@chakra-ui/react'

const Link: ThemeComponents['Link'] = {
  baseStyle: {
    color: 'red.500',
    _focus: {
      boxShadow: 'none',
    },
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      fontWeight: 'semibold',
    },
  },
}

export default Link
