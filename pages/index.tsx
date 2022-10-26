import type { NextPage } from 'next'
import HeroWithCta from 'slices/HeroWithCta'
import TextWithCta from 'slices/TextWithCta'
import WhatIs from 'slices/WhatIs'

const Home: NextPage = () => {
  return (
    <>
      <HeroWithCta />
      <TextWithCta />
      <WhatIs />
    </>
  )
}

export default Home
