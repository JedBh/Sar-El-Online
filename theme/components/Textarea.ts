import type { ThemeComponents } from '@chakra-ui/react'

const Textarea: ThemeComponents['Textarea'] = {
  baseStyle: {},
  variants: {
    primaryOutline: {
      bg: 'transparent',
      // boxShadow: '0 17px 30px 0 rgba(196, 206, 221, 0.5)',
      borderWidth: '0.5px',
      borderColor: 'rgba(255,255,255)',
      borderRadius: 0,
      color: '#f2f2f2',
      fontSize: 'xl',
      letterSpacing: 0.47,
      lineHeight: 'normal',
      py: 7,
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
    // primaryFill: {
    //   bg: '#fefefe',
    //   boxShadow: '0 17px 30px 0 rgba(196, 206, 221, 0.5)',
    //   border: '1px',
    //   borderColor: '#e3e4e9',
    //   borderRadius: 6,
    //   color: 'black.500',
    //   fontSize: 'lg',
    //   fontWeight: 'normal',
    //   _hover: {
    //     borderColor: '#3c4267',
    //   },
    //   _focus: {
    //     borderColor: '#3c4267',
    //   },
    //   _invalid: {
    //     borderColor: 'red.400',
    //   },
    // },
  },
}

export default Textarea
