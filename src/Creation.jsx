import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import earthImg from '/src/assets/desktop/image-deep-earth.jpg'
import arcadeImg from '/src/assets/desktop/image-night-arcade.jpg'
import soccerImg from '/src/assets/desktop/image-soccer-team.jpg'
import gridImg from '/src/assets/desktop/image-grid.jpg'
import aboveImg from '/src/assets/desktop/image-from-above.jpg'
import pocketImg from '/src/assets/desktop/image-pocket-borealis.jpg'
import curiosityImg from '/src/assets/desktop/image-curiosity.jpg'
import fisheyeImg from '/src/assets/desktop/image-fisheye.jpg'

const Creation = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'}>
        <Text className='josefin' marginLeft={135} fontSize={'50'} fontWeight={500}>OUR CREATIONS</Text>
        <Button width={150} border={'2px solid black'} bgColor={'white'} borderRadius={0} marginTop={3} marginRight={135} letterSpacing={2}>SEE ALL</Button>
      </Box>
        <div >
        <Box display={'flex'} justifyContent={'center'} flexWrap={'wrap'} columnGap={8} rowGap={8} paddingTop={30} paddingBottom={170} fontWeight={'400'}>
            
            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={earthImg} alt="" />
              <Text color={'white'} width={'50%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>DEEP EARTH</Text>
            </Box>
        
            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={arcadeImg} alt="" />
              <Text color={'white'} width={'55%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>NIGHT ARCADE</Text>
            </Box>
        
            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={soccerImg} alt="" />
              <Text color={'white'} width={'55%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>SOCCER TEAM VR</Text>
            </Box>
        
            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={gridImg} alt="" />
              <Text color={'white'} width={'40%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>THE GRID</Text>
            </Box>
        
            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={aboveImg} alt="" />
              <Text color={'white'} width={'55%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>FROM UP ABOVE VR</Text>
            </Box>

            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={pocketImg} alt="" />
              <Text color={'white'} width={'55%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>POCKET BOREALIS</Text>
            </Box>

            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={curiosityImg} alt="" />
              <Text color={'white'} width={'55%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>THE CURIOSITY</Text>
            </Box>

            <Box height={450}>
              <img className='img-darken' style={{ width: '250px', height: '450px' }} src={fisheyeImg} alt="" />
              <Text color={'white'} width={'55%'} fontSize={'25px'} marginLeft={'20%'} position={'relative'} bottom={'25%'}>MAKE IT FISHEYE</Text>
            </Box>
        </Box>
        </div>
    </>
  )
}

export default Creation