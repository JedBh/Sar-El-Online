import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Link,
  useDisclosure,
} from '@chakra-ui/react'
import Image from 'next/image'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
import NextLink from 'next/link'
import React from 'react'

const Navbar: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const copyrightText = `Copyright ${new Date().getFullYear()} Sar-El Group`
  return (
    <Box>
      <Box
        as='nav'
        role='navigation'
        aria-label='Main Navigation'
        pos={'fixed'}
        top={0}
        left={0}
        w={'100%'}
        transition={'all 0.4s ease'}
        bg={scrollPosition > 1 ? 'blue.900' : 'transparent'}
        boxShadow={scrollPosition > 1 ? '2xl' : '""'}
        zIndex={999}
        pb={scrollPosition > 1 ? [3, null, 4, null, 5] : [6, 7, 8, 9, 10]}
      >
        <Divider opacity={scrollPosition > 1 ? 0.1 : 0} />
        <Box
          pt={scrollPosition > 1 ? [3, null, 4, null, 5] : [6, 7, 8, 9, 10]}
          transition='all 0.4s ease'
        >
          <Flex flexDirection={'row'} alignItems={'center'}>
            <Box pos={'relative'} w={[176, 216, null, 256, 256]}>
              <NextLink href={'/'} passHref scroll={false}>
                <Link>
                  <Image
                    src={'/logo-sarelonline.svg'}
                    alt={'sarel-online-logo'}
                    width={280}
                    height={90}
                    layout={'responsive'}
                  />
                </Link>
              </NextLink>
            </Box>
            <Flex
              flex={1}
              alignItems={'center'}
              justifyContent={'flex-end'}
              display={{ base: 'flex', lg: 'none' }}
            >
              <Button
                onClick={onOpen}
                display={{ base: 'flex', lg: 'none' }}
                mr={-4}
              >
                <HamburgerIcon />
              </Button>
            </Flex>
            <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton
                  color={'blue.500'}
                  _focus={{
                    boxShadow: 'none',
                  }}
                />
                <DrawerBody top={133}>
                  <Box mt={12}>
                    <Link
                      as={'a'}
                      target={'_blank'}
                      href='https://sareltours.com'
                      fontSize={'lg'}
                      color={'blue.500'}
                      fontWeight='normal'
                      opacity={0.8}
                      _hover={{
                        opacity: '1',
                        fontWeight: 'medium',
                        textDecoration: 'none',
                      }}
                      mb={3}
                      display={'block'}
                    >
                      Sar-El Tours & Conferences
                    </Link>
                    <Link
                      as={'a'}
                      target={'_blank'}
                      href='https://sarel.group'
                      fontSize={'lg'}
                      color={'blue.500'}
                      fontWeight='normal'
                      opacity={0.8}
                      _hover={{
                        opacity: '1',
                        fontWeight: 'medium',
                        textDecoration: 'none',
                      }}
                      mb={3}
                      display={'block'}
                    >
                      Sar-El Group
                    </Link>
                  </Box>
                </DrawerBody>

                <DrawerFooter
                  borderTopWidth='1px'
                  justifyContent={'flex-start'}
                  flexDirection='column'
                  alignItems={'flex-start'}
                >
                  {copyrightText}
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Flex
              flex={1}
              alignItems={'center'}
              justifyContent={'flex-end'}
              display={{ base: 'none', lg: 'flex' }}
            ></Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}

export default Navbar
