import { Box } from '@chakra-ui/react'
import Layout from 'components/layout'
import type { NextPage } from 'next'
import HeroWithCta from 'slices/HeroWithCta'
import TextWithCta from 'slices/TextWithCta'
import WhatIs from 'slices/WhatIs'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box>
          <HeroWithCta />
          <TextWithCta />
          <WhatIs />
        </Box>
      </Layout>
    </>
  )
}

export default Home
