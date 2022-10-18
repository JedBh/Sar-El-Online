import { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: () => ({
    body: {
      backgroundColor: 'black.500',
      fontFamily: 'PPNeueMontreal',
    },
    h2: {
      textTransform: 'uppercase',
    },
    a: {
      color: 'white.500',
    },
    strong: {
      fontWeight: 'black',
    },
  }),
}

export default styles
