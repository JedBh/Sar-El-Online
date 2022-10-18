import type { ThemeComponents } from '@chakra-ui/react'

const Select: ThemeComponents['Select'] = {
  baseStyle: {},
  variants: {
    jobs: {
      icon: {
        color: 'red.400',
      },
      field: {
        bg: 'gray.700',
        border: '1px',
        borderColor: 'gray.500',
        borderRadius: 'base',
        color: '#fff',
        _hover: {
          borderColor: 'gray.300',
        },
        _focus: {
          borderColor: 'gray.300',
          // border: 'none',
        },
        _invalid: {
          borderColor: 'red.400',
        },
      },
    },
  },
}

export default Select
