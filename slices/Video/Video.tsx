import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  Container,
} from '@chakra-ui/react'
import React from 'react'

import ReactPlayer from 'react-player/lazy'
import Image from 'next/image'

const Video: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Container my={[10, 12, 14, 16, 20]}>
      <Box
        height={['12rem', '22rem', '28rem', '32rem', '32rem']}
        width='100%'
        bgImage={
          'https://res.cloudinary.com/ddinaig4n/image/upload/v1651045675/sar-el_adventures/dave-herring-kONOqBwP800-unsplash_sfkxhv.jpg' ||
          'blue.500'
        }
        bgSize='cover'
        bgPos='center'
        boxShadow='2xl'
        onClick={onOpen}
        pos={'relative'}
        display='flex'
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={10}
        cursor='pointer'
      >
        <Box
          pos={'relative'}
          transition='transform .5s'
          _hover={{ opacity: 0.9, transform: 'scale(1.1)' }}
        >
          <Image
            src={'/playIcon.png'}
            width={80}
            height={50}
            layout='fixed'
            alt=''
          />
        </Box>
      </Box>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size='2xl'>
        <ModalOverlay />
        <ModalContent m={[2, 4, 6, 8, 10]}>
          <ModalBody p={1}>
            <ReactPlayer
              url={'https://www.youtube.com/watch?v=pJdgXDVJ27Y'}
              width='100%'
              controls={true}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  )
}

export default Video
