import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import interactiveImg from '/src/assets/desktop/image-interactive.jpg'

const About = () => {
  return (
    <>
        <div>
        <Box height={590}>
            <Box paddingLeft={135}>
                <img style={{ width: '700px', height: '430px' }} src={interactiveImg} alt="" />
            </Box>
            <Box position={'relative'} left={680} bottom={270} bgColor={'white'} color={'black'} textAlign={'left'} height={400} width={600} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}> 
                <Text fontSize={50} width={'70%'} fontWeight={300} lineHeight={1}>THE LEADER IN INTERACTIVE VR</Text>
                <br />
                <Text color={'gray.400'}fontSize={13} width={'70%'} fontWeight={'bold'} alignItems={'center'}>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; businesses through digital expreciences that bind to their brand.</Text>
            </Box>
        </Box>
        </div>
    </>
  )
}

export default About