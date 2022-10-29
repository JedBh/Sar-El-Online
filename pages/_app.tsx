import '@fontsource/montserrat'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import defaultSeo from 'next-seo.config'
import { DefaultSeo } from 'next-seo'
import Global from 'components/Global'
import theme from 'theme'
import Head from 'next/head'

function App({ Component, pageProps }: AppProps) {
  const seo = defaultSeo()

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0'
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Global />
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}

export default App
