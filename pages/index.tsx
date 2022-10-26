import type { NextPage } from 'next'
import HeroWithCta from 'slices/HeroWithCta'
import TextWithCta from 'slices/TextWithCta'

const Home: NextPage = () => {
  return (
    <>
      <HeroWithCta />
      <TextWithCta />
    </>
  )
}

export default Home
