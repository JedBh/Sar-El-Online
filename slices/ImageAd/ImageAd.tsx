import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
} from '@chakra-ui/react'
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
                style={{ borderRadius: '12px 5px 4px 20px' }}
              />
              <Flex justifyContent={'center'} m={4}>
                <Link
                  as={'a'}
                  href={'https://sareltours.com'}
                  target={'_blank'}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button variant={'primaryOutline'}>Read More</Button>
                </Link>
              </Flex>
            </Box>
          </GridItem>
          <GridItem>
            <Box pos={'relative'}>
              <Link href={'https://sareltours.com'} target={'_blank'}>
                <Image
                  src={
                    'https://res.cloudinary.com/ddinaig4n/image/upload/v1666954021/SarElLanding/Tel-Aviv_eovenw.png'
                  }
                  alt={'Tel Aviv Deal'}
                  width={1350}
                  height={900}
                  layout={'responsive'}
                  objectFit={'cover'}
                  style={{
                    borderRadius: '12px 5px 4px 20px',
                  }}
                />
              </Link>
              <Flex justifyContent={'center'} m={4}>
                <Link
                  as={'a'}
                  href={'https://sareltours.com'}
                  target={'_blank'}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Button variant={'primaryOutline'}>Read More</Button>
                </Link>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
      </Flex>
    </>
  )
}

export default ImageAd
