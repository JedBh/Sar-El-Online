import { ArrowForwardIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react'
import Image from 'next/image'

const Footer: React.FC = () => {
  const footerLink = {
    '& a': {
      opacity: 0.8,
      color: '#fff',
      '&:hover': {
        opacity: 1,
        fontWeight: 'bold',
        textDecoration: 'none',
      },
    },
  }
  const copyrightText = `Copyright ${new Date().getFullYear()} Sar-El Group`
  return (
    <>
      <Box as='footer' bg={'blue.900'} pt={[10, 12, 14, 16, 20]} color='white'>
        <Container>
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(5, 1fr)',
            }}
            gap={8}
          >
            <GridItem colSpan={{ base: 1, sm: 2 }}>
              <Heading
                as='h2'
                size={'lg'}
                fontWeight='medium'
                mb={[3, null, 4, null, 5]}
              >
                Check Our Other Websites
              </Heading>
              <List>
                <ListItem
                  fontSize='1xl'
                  fontWeight='normal'
                  lineHeight={'normal'}
                  mb={[3, null, 4, null, 5]}
                  sx={footerLink}
                >
                  <Link
                    as={'a'}
                    href={'https://sareltours.com'}
                    // mt={[9, 10, 12, 14, 16]}
                    display={{ base: 'block' }}
                    margin={{ base: '0 auto', sm: 'unset' }}
                    target={'_blank'}
                  >
                    <ArrowForwardIcon />
                    <Text as={'span'} p={4}>
                      Sar-El Tours & Conferences
                    </Text>
                  </Link>
                </ListItem>
                <ListItem
                  fontSize='1xl'
                  fontWeight='normal'
                  lineHeight={'normal'}
                  mb={[3, null, 4, null, 5]}
                  sx={footerLink}
                >
                  <Link
                    as={'a'}
                    href={'https://sarel.group'}
                    // mt={[9, 10, 12, 14, 16]}
                    display={{ base: 'block' }}
                    margin={{ base: '0 auto', sm: 'unset' }}
                    target={'_blank'}
                  >
                    <ArrowForwardIcon />
                    <Text as={'span'} p={4}>
                      Sar-El Group
                    </Text>
                  </Link>
                </ListItem>
              </List>
            </GridItem>

            <GridItem colSpan={1}></GridItem>
            <GridItem colSpan={1}></GridItem>
            <GridItem colSpan={1}>
              <Link
                as={'a'}
                href={'https://sarel.group'}
                // mt={[9, 10, 12, 14, 16]}
                display={{ base: 'block' }}
                maxW={'200px'}
                margin={{ base: '0 auto', sm: 'unset' }}
                target={'_blank'}
              >
                <Box filter={'brightness(0) invert(1)'}>
                  <Image
                    src={
                      'https://res.cloudinary.com/ddinaig4n/image/upload/v1648553825/logos/group_ipvh00.png'
                    }
                    alt={'sarel-tours'}
                    width={858}
                    height={780}
                    layout='responsive'
                  />
                </Box>
              </Link>
            </GridItem>
          </Grid>
          <Divider mt={10} mb={10} borderColor={'blue.400'} />
          <Flex
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            pb={10}
          >
            <Box display={'flex'} flexDirection={'row'}></Box>
            <Text
              fontSize='sm'
              fontWeight='normal'
              lineHeight={'normal'}
              my={2}
            >
              {copyrightText}
            </Text>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Footer
