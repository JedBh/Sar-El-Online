import { Box, Button, Grid, GridItem, Text } from '@chakra-ui/react'
import Link from 'next/link'

const TextWithCta: React.FC = () => {
  const firstParagraph =
    'Israel is a world-class tourism destination, offering a variety of experiences. Our online platform was created to help you benefit from everything the FIT market in Israel has to offer. '

  const secondParagraph =
    'Whether you are already selling FIT solutions to your customers, or are considering adding this travel option to your menu of services, our Sar-El Online platform provides comprehensive solutions, convenient shopping, instant booking, and better deals in one place.  Whether FIT travel is new to your agency, or if you are looking to improve the way you serve your existing FIT clients, Sar-El Online is the solution for you.'

  return (
    <>
      <Box boxShadow={'0 17px 12px -3px rgba(36, 41, 74, 1) inset'}>
        <Grid>
          <GridItem>
            <Box
              mt={[null, null, null, 82]}
              p={[8, null, null, 8]}
              pos={'relative'}
              width={['100%', '100%', '85%', '75%', '70%']}
              margin={'0 auto'}
            >
              <Box>
                <Text
                  fontSize={['2xl', null, null, '3xl']}
                  color={'white'}
                  mt={10}
                >
                  {firstParagraph}
                </Text>
                <Text
                  fontSize={['2xl', null, null, '3xl']}
                  color={'white'}
                  mt={10}
                >
                  {secondParagraph}
                </Text>
              </Box>
            </Box>
          </GridItem>
          <GridItem>
            <Box
              pos={'relative'}
              width={['100%', '100%', '85%', '75%', '70%']}
              margin={'0 auto'}
            >
              <Box
                mt={12}
                mb={6}
                display={'flex'}
                justifyContent={['center', null, null, 'end']}
              >
                <Link href={'https://b2b-sarel.travelbooster.com'}>
                  <Button variant='wavy' fontSize={['1xl', '1xl', null, '3xl']}>
                    Access The Sar-El Online Platform
                  </Button>
                </Link>
              </Box>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </>
  )
}

export default TextWithCta
