import React from 'react';
import {
  Box,
  Container,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import './styles.css'


export default function Footer() {
  return (
    <div className='footer-container'>
      <Box className='event-footer'
        bg={useColorModeValue('gray.300', 'gray.900')}
        color={useColorModeValue('gray.900', 'gray.300')}>
        <Container
          as={Stack}
          maxW={'xl'}
          py={5}
          direction={{ base: 'column', md: 'row' }}
          spacing={1}
          justify={{ base: 'center', md: 'center'}}
          align={{ base: 'center', md: 'center' }}>
          <h1 textAlign="center">© 2023 All rights reserved.</h1>
        </Container>
      </Box>
    </div>
    
  )
}
