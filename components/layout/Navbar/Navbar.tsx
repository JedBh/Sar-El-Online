import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  useDisclosure,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { useEffect, useState } from 'react'
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
        <Container
          pt={scrollPosition > 1 ? [3, null, 4, null, 5] : [6, 7, 8, 9, 10]}
          transition='all 0.4s ease'
        >
          <Flex flexDirection={'row'} alignItems={'center'}>
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
                <DrawerBody top={133}></DrawerBody>

                <DrawerFooter
                  borderTopWidth='1px'
                  justifyContent={'flex-start'}
                  flexDirection='column'
                  alignItems={'flex-start'}
                ></DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Flex
              flex={1}
              alignItems={'center'}
              justifyContent={'flex-end'}
              display={{ base: 'none', lg: 'flex' }}
            ></Flex>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

export default Navbar
