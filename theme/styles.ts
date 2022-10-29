import { Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: () => ({
    body: {
      backgroundColor: 'blue.900',
      // fontFamily: 'PPNeueMontreal',
      fontFamily: `Montserrat,Helvetica,Arial,serif`,
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
