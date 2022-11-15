import { Box } from '@chakra-ui/react'
import React from 'react'
import fbicon from '/src/assets/icons/icon-facebook.svg'
import tticon from '/src/assets/icons/icon-twitter.svg'
import pticon from '/src/assets/icons/icon-pinterest.svg'
import igicon from '/src/assets/icons/icon-instagram.svg'

const Busayo = () => {
  return (
    <>
    <Box>
        <Box bgColor={'black'} height={'150px'} display={'flex'} justifyContent={'space-between'}>
            <Box paddingLeft={130} paddingTop={10}>
                <Box className='varela' color={'white'} height={'50px'} fontSize={24}><b>loopstudios</b></Box>
                <Box color={'white'} display={'flex'} gap={9}>
                    <Box>About</Box>
                    <Box>Careers</Box>
                    <Box>Events</Box>
                    <Box>Products</Box>
                    <Box>Support</Box>
                </Box>
            </Box>
            <Box paddingRight={130} paddingTop={10}>
                <Box color={'white'} height={'50px'} display={'flex'} justifyContent={'right'} columnGap={5}>
                    <Box><img src={fbicon} style={{ width: '22px', height: '22px' }} alt="facebook link" /></Box>
                    <Box><img src={tticon} style={{ width: '22px', height: '21px' }} alt="twitter link" /></Box>
                    <Box><img src={pticon} style={{ width: '22px', height: '22px' }} alt="pinterest link" /></Box>
                    <Box><img src={igicon} style={{ width: '22px', height: '22px' }} alt="instagram link" /></Box>
                </Box>
                <Box color={'grey'} height={'30%'}>&copy; <b>2021</b> Loopstudios. All rights reserved.</Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Busayo