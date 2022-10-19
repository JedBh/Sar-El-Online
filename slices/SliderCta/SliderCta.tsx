import { Box, Flex, Text } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ParticleApp from 'components/particles/particles'

const SliderCta: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, // autoscroll on= true , false: off
    autoplaySpeed: 5500,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slider = {
    '& .slick-arrow ': {
      display: 'none !important',
      // ['@media (max-width:48em)']: {
      //   display: 'block !important',
      // },
    },
    '& .slick-next': {
      right: '-12px',
    },
    '& .slick-prev': {
      left: '-12px',
    },
    '& .slick-prev:before, .slick-next:before': {
      color: '#626262',
    },
    '& .slick-slide': {
      padding: 8,
    },
    '& .slick-dots': {
      bottom: -20,
    },
    '& .slick-dots li': {
      margin: '0 15px',
      ['@media (max-width:80em)']: {
        margin: '0 8px',
      },
      ['@media (max-width:62em)']: {
        margin: '0 6px',
      },
      ['@media (max-width:48em)']: {
        margin: '0 4px',
        display: 'none',
      },
      ['@media (max-width:32em)']: {
        margin: '0 2px',
      },
    },
    '& .slick-dots li button:before': {
      fontSize: 16,
      opacity: 0.1,
      color: 'blue.500',
      ['@media (max-width:80em)']: {
        fontSize: 14,
      },
      ['@media (max-width:62em)']: {
        fontSize: 12,
      },
      ['@media (max-width:48em)']: {
        fontSize: 10,
      },
      ['@media (max-width:32em)']: {
        fontSize: 8,
      },
    },
    '& .slick-dots li.slick-active button:before': {
      color: 'blue.500',
      opacity: 'unset',
    },
    // '& .rec-item-wrapper': {
    //   height: '100%',
    // },
  }

  const arr = [
    {
      name: 'jedediah',
      age: 23,
      paragraph:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut explicabo labore repellendus consequuntur exercitationem rem earum, enim repudiandae nostrum distinctio officia porro sint ipsa dolor temporibus dolore quia consectetur reiciendis!',
    },
    {
      name: 'gabriela',
      age: 23,
      paragraph:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut explicabo labore repellendus consequuntur exercitationem rem earum, enim repudiandae nostrum distinctio officia porro sint ipsa dolor temporibus dolore quia consectetur reiciendis!',
    },
    {
      name: 'levi',
      age: 22,
      paragraph:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut explicabo labore repellendus consequuntur exercitationem rem earum, enim repudiandae nostrum distinctio officia porro sint ipsa dolor temporibus dolore quia consectetur reiciendis!',
    },
  ]

  return (
    <>
      <Box pos={'relative'}>
        <ParticleApp />
        <Box sx={slider}>
          <Slider {...settings} autoplay={true}>
            {arr.map((item, i) => (
              <Box key={i} w={400} pos='relative'>
                <Box
                  bgColor={'blue.500'}
                  position='absolute'
                  w={'100%'}
                  h={'100%'}
                  borderRadius={[16, 20, 24, 28, 32]}
                  top={[3, null, 4, null, 5]}
                ></Box>
                <Box
                  bgColor={'paleGreen.500'}
                  px={{ base: 2, sm: 3, md: 4, lg: 5, xl: 6 }}
                  py={{ base: 6, sm: 7, md: 8, lg: 9, xl: 10 }}
                  borderRadius={[16, 20, 24, 28, 32]}
                  pos='relative'
                  left={[2, 3, 4, 6, 8]}
                  zIndex={1}
                >
                  <Flex>
                    <Box
                      pos='relative'
                      w={'fit-content'}
                      mr={[4, 5, 6, 7, 8]}
                      ml={[-10, -12, -14, -16, -20]}
                      mt={[-8, -10, -12, -14, '-72px']}
                    >
                      <Box
                        w={{
                          base: '6rem',
                          sm: '7rem',
                          md: '8rem',
                          lg: '9rem',
                          xl: '10.7rem',
                        }}
                        h={{
                          base: '6rem',
                          sm: '7rem',
                          md: '8rem',
                          lg: '9rem',
                          xl: '10.7rem',
                        }}
                        borderRadius={80}
                        pos='relative'
                        zIndex={1}
                      ></Box>
                      <Box
                        w={{
                          base: '6rem',
                          sm: '7rem',
                          md: '8rem',
                          lg: '9rem',
                          xl: '10.7rem',
                        }}
                        h={{
                          base: '6rem',
                          sm: '7rem',
                          md: '8rem',
                          lg: '9rem',
                          xl: '10.7rem',
                        }}
                        borderRadius={'100%'}
                        bgColor={'gray.500'}
                        position='absolute'
                        top={2}
                        left={2}
                      ></Box>
                    </Box>
                    <Flex flexDir={'column'}>
                      <Text size={'md'} fontWeight='bold' color={'white'}>
                        {item.name}
                      </Text>
                      <Text
                        size={'xs'}
                        fontWeight='normal'
                        fontStyle={'italic'}
                        color={'white'}
                        mt={2}
                      >
                        {item.age}
                      </Text>
                    </Flex>
                  </Flex>
                  <Text
                    size={'xs'}
                    fontWeight='normal'
                    color={'white'}
                    mt={{ base: 2, md: 3, xl: 4 }}
                  >
                    {item.paragraph}
                  </Text>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  )
}

export default SliderCta
