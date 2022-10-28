import { Box, Flex, Grid, GridItem, Heading } from '@chakra-ui/react'
import Image from 'next/image'

const ImageAd: React.FC = () => {
  return (
    <>
      <Flex justifyContent={'center'} mt={130} mb={62} pb={32} pt={54}>
        <Heading color={'#fff'} fontSize={'5xl'}>
          Our Latest Deals
        </Heading>
      </Flex>
      <Flex justifyContent={'center'} mt={12} mb={32}>
        <Grid
          w={'75%'}
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
          ]}
          gap={[6, 7, 8, 9, 100]}
          justifyContent={'center'}
        >
          <GridItem>
            <Box pos={'relative'}>
              <Image
                src={
                  'https://res.cloudinary.com/ddinaig4n/image/upload/v1666954028/SarElLanding/Jerusalem_t6k2ae.png'
                }
                alt={'Jerusalem Deal'}
                width={1350}
                height={900}
                layout={'responsive'}
                objectFit={'cover'}
                style={{ borderRadius: 4 }}
              />
            </Box>
          </GridItem>
          <GridItem>
            <Box pos={'relative'}>
              <Image
                src={
                  'https://res.cloudinary.com/ddinaig4n/image/upload/v1666954021/SarElLanding/Tel-Aviv_eovenw.png'
                }
                alt={'Tel Aviv Deal'}
                width={1350}
                height={900}
                layout={'responsive'}
                objectFit={'cover'}
                style={{ borderRadius: 4 }}
              />
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default ImageAd
