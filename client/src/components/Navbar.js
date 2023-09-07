import React, { useContext, useState, useEffect } from 'react';
import {Box,Flex,HStack,Text,IconButton,useDisclosure,useColorModeValue,Stack, Button,useColorMode} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon,MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import './styles.css';
import { LoginContext } from '../contexts/LoginContext';

const Links = [
  { label: 'Home', url: '/' },
];

const NavLink = (props) => {
  const { children, url } = props;
  return (
    <Link to={url} className="nav-link">
      <Box as="a" px={2} py={1} rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('purple.50'),
        }}
      >
        {children}
      </Box>
    </Link>
  );
};

export default function Navbar() {
  let [, , userLoginStatus, , logOutUser] = useContext(LoginContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    setIsLoggedIn(userLoginStatus);
  }, [userLoginStatus]);

  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Box className="navbar-container" px={4} bg={useColorModeValue('gray.100', 'gray.900')}  position="sticky" top="0" zIndex="999" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={'center'}
            justifyContent="space-between"
            flex="1"
          >
            <Text fontSize="2xl" fontWeight="extrabold">
              EventEase.
            </Text>
            
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
            </Button>
              {Links.map((link) => (
                <NavLink key={link.label} url={link.url}>
                  {link.label}
                </NavLink>
              ))}
              {isLoggedIn ? 
              (<>
              <NavLink url="/events">Events</NavLink>
              <Link url="/" onClick={logOutUser}>Logout</Link>
              </>) : (<>
                  <NavLink url="/login">Login</NavLink>
                  <NavLink url="/register">Register</NavLink>
                </>
              )}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} url={link.url}>
                  {link.label}
                </NavLink>
              ))}
              {isLoggedIn ? (<>
                <NavLink url="/events">Events</NavLink>
              <Link url="/" onClick={logOutUser}>Logout</Link>
              </>) : (
                <>
                  <NavLink url="/login">Login</NavLink>
                  <NavLink url="/register">Register</NavLink>
                </>
              )}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
