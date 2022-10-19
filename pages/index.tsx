import type { NextPage } from 'next'
import HeroWithCta from 'slices/HeroWithCta'
import SliderCta from 'slices/SliderCta'

const Home: NextPage = () => {
  return (
    <>
      <HeroWithCta />
      <SliderCta />
    </>
  )
}

export default Home
