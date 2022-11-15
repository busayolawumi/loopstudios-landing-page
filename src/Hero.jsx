import React from 'react'
import './First.css'
import { Box, Text } from '@chakra-ui/react'
import heroImg from '/src/assets/desktop/image-hero.jpg'

const Hero = () => {
  return (
    <>
      <Box height={710}>
          <img style={{ width: '100vw', height: '85vh' }}  src={heroImg} alt="hero-img" />
          <Box color={'white'} display={'flex'} justifyContent={['space-between']} marginLeft={135} position={'relative'} bottom={520}>
            <Box className='varela' fontSize={30}><b>loopstudios</b></Box>
            <Box display={'flex'} justifyContent={'space-between'} marginRight={135} width={'31%'} position={'relative'} top={4}>
              <Box>About</Box>
              <Box>Careers</Box>
              <Box>Events</Box>
              <Box>Products</Box>
              <Box>Support</Box>
            </Box>
          </Box>
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} border={'2px solid white'} fontSize={55} color={'white'} marginLeft={135} height={250} width={600} position={'relative'} bottom={400}>
            <Text fontWeight={300} marginLeft={16} width={400} letterSpacing={2} lineHeight={1.3}>IMMERSIVE EXPERIENCES THAT DELIVER</Text>
          </Box>
      </Box>
    </>
  )
}

export default Hero