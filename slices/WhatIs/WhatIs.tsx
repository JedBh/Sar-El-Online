import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react'
import Blob from 'components/Blob'

const WhatIs: React.FC = () => {
  const title = 'What is Sar-El Online?'
  const firstParagraph =
    'Sar-El Online is an online comprehensive booking platform which provides seamless access to all the services you may need for your FITs while traveling to Israel and other Middle Eastern countries. Our online platform includes multiple options for weekend packages, city breaks, private daily tours, a wide variety and classes of hotels, professional guided tours in many different languages, daily tours, set departure tours, specialized amenities, transfers and much more. Sar-El Online is offered exclusively to our partner travel agents around the world and delivers smooth and convenient shopping, booking and instant confirmations at attractive prices, terms & conditions.'
  const secondParagraph =
    'You can now serve your new and existing FIT clients with a click of a button! Register at …… and grow your business with Sar-El Online.'
  return (
    <>
      <Box
        pos={'relative'}
        /* mt={260} */
      >
        <Box pos={'absolute'} zIndex={-1} width={'85%'} top={332}>
          <Blob />
        </Box>
        <Flex justifyContent={'center'}>
          <Grid
            templateColumns={[
              'repeat(1, 1fr)',
              null,
              'repeat(1, 1fr)',
              null,
              'repeat(1, 1fr)',
            ]}
            gap={2}
            m={[0, 6, null, 12]}
          >
            <GridItem>
              <Heading
                variant={'gradient'}
                fontSize={['2xl', '3xl', null, '6xl']}
                color={'white'}
                // mt={10}
                textAlign={['center', null, null, 'start']}
              >
                {title}
              </Heading>
              <Text
                fontSize={['2xl']}
                color={'white'}
                mt={14}
                ml={10}
                width={['75%', '85%', '75%', '70%']}
              >
                {firstParagraph}
              </Text>
            </GridItem>
            <GridItem>
              <Text
                fontSize={['2xl']}
                color={'white'}
                mt={10}
                ml={10}
                width={['75%', '85%', '75%', '70%']}
              >
                {secondParagraph}
              </Text>
              <Box mt={12} display={'flex'} justifyContent={'end'}>
                <Button variant='wavy'>Access to Sar-El Online Platform</Button>
              </Box>
            </GridItem>
          </Grid>
        </Flex>
      </Box>
    </>
  )
}

export default WhatIs
