import type { ThemeComponents } from '@chakra-ui/react'

const Input: ThemeComponents['Input'] = {
  baseStyle: {
    field: {},
  },
  variants: {
    primaryOutline: {
      field: {
        bg: 'transparent',
        // boxShadow: '0 17px 30px 0 rgba(196, 206, 221, 0.5)',
        borderWidth: '0.5px',
        borderColor: 'rgba(255,255,255)',
        borderRadius: 0,
        color: '#f2f2f2',
        fontSize: 'xl',
        letterSpacing: 0.47,
        lineHeight: 'normal',
        py: 8,
        fontWeight: 'normal',
        _hover: {
          borderWidth: '1px',
        },
        _focus: {
          borderWidth: '1px',
        },
        _invalid: {
          borderWidth: '1px',
        },
        _placeholder: {
          opacity: 0.6,
          color: '#f2f2f2',
          fontWeight: 'normal',
        },
      },
    },
  },
}

export default Input
