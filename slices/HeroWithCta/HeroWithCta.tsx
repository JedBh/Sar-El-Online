import { Box, Container, Flex, Heading } from '@chakra-ui/react'

const HeroWithCta: React.FC = () => {
  const hotGradient = {
    background:
      '-webkit-linear-gradient(200deg, rgba(131,58,180,1) 20%, rgba(229,35,59,1) 46%, rgba(253,29,29,1) 57%, rgba(252,176,69,1) 78%)',
    fill: 'transparent',
    backgroundClip: 'text',
  }

  const coldGradient = {
    background:
      '-webkit-linear-gradient(200deg, rgba(239,242,244,1) 13%, rgba(168,186,193,1) 29%, rgba(87,193,188,1) 50%, rgba(46,163,199,1) 73%, rgba(0,70,96,1) 96%)',
    fill: 'transparent',
    backgroundClip: 'text',
  }

  return (
    <>
      <Container
        pos='relative'
        maxW={'unset'}
        // borderBottom='0.5px solid #4a4a4a'
        bgImage={
          'https://res.cloudinary.com/ddinaig4n/image/upload/v1666123030/SarElLanding/cristina-gottardi-Nh8bXxdP0DI-unsplash_xkg785.jpg' ||
          '""'
        }
        bgPos={'center'}
        bgSize={'cover'}
        display={'flex'}
        flexDir={'column'}
        alignItems={'flex-start'}
        justifyContent={'center'}
      >
        <Box
          pos={'absolute'}
          zIndex={1}
          top={0}
          bottom={0}
          left={0}
          right={0}
          w='100%'
          h='100%'
          opacity={0.9}
          bgImg={[
            'linear-gradient(to left, rgba(0, 0, 0, 0)  , #0f1010 100%, #0f1010 60%)',
            'linear-gradient(to left, rgba(0, 0, 0, 0)  , #0f1010 95%, #0f1010 60%)',
            'linear-gradient(to left, rgba(0, 0, 0, 0)  , #0f1010 90%, #0f1010 60%)',
            'linear-gradient(to left, rgba(0, 0, 0, 0)  , #0f1010 80%, #0f1010 60%)',
            'linear-gradient(to left, rgba(0, 0, 0, 0)  , #0f1010 75%, #0f1010 60%)',
          ]}
        ></Box>
        <Box
          pos={'relative'}
          zIndex={9}
          pt={20}
          pb={[10, 12, 14, 16, 20]}
          h='100%'
          w='100%'
          px={[0, 0, 10, 16, 20]}
          bgImg={
            'linear-gradient(to left, rgba(0, 0, 0, 0) 100%, #1c1c1c 15%, #1c1c1c -13%)'
          }
          minH={'28.1rem'}
          display='flex'
          flexDir={'column'}
          justifyContent={'center'}
        >
          <Flex mt={20} alignItems={'end'}>
            <Heading
              as={'h1'}
              size={'xl5'}
              color={'#fff'}
              fontWeight={'bold'}
              lineHeight={0.99}
              letterSpacing={1.1}
              textTransform={'uppercase'}
            >
              ISRAEL.
              <Box as={'span'} sx={hotGradient}>
                FITs?
              </Box>
            </Heading>
          </Flex>
          <Box mt={0}>
            <Heading
              as={'h2'}
              size={'xl2'}
              color={'#fff'}
              fontWeight={'bold'}
              lineHeight={0.89}
              letterSpacing={1.1}
              textTransform={'uppercase'}
            >
              Discover the{' '}
              <Box as='span' sx={coldGradient}>
                FIT
              </Box>{' '}
              Market Growth in Israel
            </Heading>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default HeroWithCta
