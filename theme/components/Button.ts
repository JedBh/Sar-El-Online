import { ThemeComponents } from '@chakra-ui/react'

const Button: ThemeComponents['Button'] = {
  baseStyle: {
    borderRadius: 0,
    fontWeight: 'normal',
    height: 'unset',
    textTransform: 'uppercase',
    _hover: {
      fontWeight: 'medium',
    },
    _focus: {
      boxShadow: 'unset',
    },
  },
  sizes: {
    xs: {
      fontSize: 'xs',
      py: 0,
    },
    sm: {
      fontSize: 'lg',
      py: 5,
    },
    md: {
      fontSize: 'xl',
      py: 6,
      height: 'unset',
    },
    lg: {
      fontSize: '2xl',
      py: 7,
      height: 'unset',
    },
  },
  variants: {
    primaryOutline: {
      border: '0.5px solid white',
      color: '#fff',
      py: 8,
      transition: 'border 0.5s, background-color 0.5s',
      outline: 'unset',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      _hover: {
        backgroundColor: '#fff',
        color: '#0f1010',
        border: '1px solid white',
      },
    },
    primaryUnderline: {
      px: 0,
      borderBottom: '1px solid white',
      color: '#fff',
      display: 'inline-block',
      // paddingBottom: '2px',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      backgroundImage: 'linear-gradient(#fff, #fff)',
      backgroundPosition: '0 104%' /*OR bottom left*/,
      backgroundSize: '0% 2.6px',
      backgroundRepeat: 'no-repeat',
      transition:
        'background-size 0.5s,background-position 0s 0.5s, font-weight 0.5s',
      _hover: {
        borderBottom: '1px solid transparent',
        color: '#fff',
        backgroundPosition: '100% 104%' /*OR bottom right*/,
        backgroundSize: '100% 2.6px',
        backgroundImage: 'linear-gradient(#0f9df7, #0f9df7)',
      },
    },
    secondaryUnderline: {
      borderBottom: '1px solid #f8932d',
      color: '#fff',
      px: 0,
      letterSpacing: 1.1,
      lineHeight: 'normal',
      transition: 'borderBottom 0.5s',
      _hover: {
        borderBottom: '2px solid #fff',
      },
    },
    primaryText: {
      color: '#fff',
      fontWeight: 'normal',
      px: 0,
      letterSpacing: 1.1,
      lineHeight: 'normal',
    },
    secondaryText: {
      color: 'blue.500',
      px: 0,
      letterSpacing: 1.1,
      lineHeight: 'normal',
    },
    tertiaryText: {
      color: '#fff',
      opacity: 0.8,
      padding: 0,
      transition: 'opacity 0.5s',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      _hover: {
        opacity: 1,
      },
    },
    tertiaryOutline: {
      border: '1px solid #fff',
      color: '#fff',
      transition: 'border 0.5s,backgroundColor 0.5s ',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      _hover: {
        backgroundColor: '#fff',
        color: 'blue.500',
      },
    },
    primarySolid: {
      boxShadow: '0 14px 16px 0 rgba(229, 102, 98, 0.34)',
      backgroundColor: '#e56662',
      color: '#fff',
      transition: 'background-color 0.5s,box-shadow 0s 0.5s',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      _hover: {
        boxShadow: '0 8px 16px 0 rgba(229, 102, 98, 0.34)',
        backgroundColor: '#f76c68',
      },
    },
    secondarySolid: {
      bg: 'darkBlue.500',
      borderColor: 'transparent',
      borderWidth: 0,
      color: '#fff',
      boxShadow: '0 17px 30px 0 rgba(36, 41, 74, 0.34);',
      transition: 'background-color 0.5s',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      _hover: {
        backgroundColor: '#3c4267',
      },
    },
    wavy: {
      backgroundImage: "url('/layered-peaks-haikei.svg')",
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#fff',
      boxShadow: '0 17px 30px 0 rgba(36, 41, 74, 0.34);',
      transition: 'color 0.5s',
      letterSpacing: 1.1,
      lineHeight: 'normal',
      _hover: {
        color: 'blue.900',
      },
    },
  },
  defaultProps: {
    variant: 'primary',
  },
}

export default Button
