import { Box, Button, Flex, Text } from '@chakra-ui/react'

const TextWithCta: React.FC = () => {
  const firstParagraph =
    'Israel is a world-class tourism destination, offering a variety of experiences. Our online platform was created to help you benefit from everything the FIT market in Israel has to offer. '

  const secondParagraph =
    'Whether you are already selling FIT solutions to your customers, or are considering adding this travel option to your menu of services, our Sar-El Online platform provides comprehensive solutions, convenient shopping, instant booking, and better deals in one place.  Whether FIT travel is new to your agency, or if you are looking to improve the way you serve your existing FIT clients, Sar-El Online is the solution for you.'

  return (
    <>
      <Box
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        backgroundSize={'cover'}
        backgroundImage={"url('/layered-waves-haikei.svg')"}
      >
        <Flex justifyContent={'center'} mb={102}>
          <Box
            mt={[null, null, null, 302]}
            p={8}
            pos={'relative'}
            width={['100%', '100%', '85%', '75%', '70%']}
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
            <Box mt={12} display={'flex'} justifyContent={'end'}>
              <Button variant='tertiaryOutline'>
                Access to Sar-El Online Platform
              </Button>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

export default TextWithCta
