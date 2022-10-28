import { Box } from '@chakra-ui/react'
import Layout from 'components/layout'
import type { NextPage } from 'next'
import HeroWithCta from 'slices/HeroWithCta'
import TextWithCta from 'slices/TextWithCta'
import ParticleApp from 'components/particles'
import WhatIs from 'slices/WhatIs'
import ImageAd from 'slices/ImageAd'

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Box pos={'relative'}>
          <ParticleApp />
          <HeroWithCta />
          <TextWithCta />
          <WhatIs />
          <ImageAd />
        </Box>
      </Layout>
    </>
  )
}

export default Home
