import React from 'react';
import axios from 'axios';
import {Flex, Box,FormControl,FormLabel,Input,Checkbox,Stack,Button,Heading,Text,useColorModeValue,Alert,
  AlertIcon,} from '@chakra-ui/react';
import {useForm} from 'react-hook-form'
import {useContext, useEffect} from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { LoginContext } from '../contexts/LoginContext';

export default function Login() {
  

  let [, loginErr, , logInUser, ] = useContext(LoginContext);


  const token = localStorage.getItem('userId')

  let {
    register, 
    handleSubmit,
    formState: {errors},
  } = useForm();

  let handleLogin = (logUser) => {
    logInUser(logUser)
  }

  let navigate=useNavigate();
  
  useEffect(() => {
    if(token){
      navigate("/events")
    }
  })

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login to your account.</Heading>
        </Stack>
        {loginErr && loginErr.length!==0 && <Text color='red.600'>
        <Alert status='error'>
          <AlertIcon />
          {loginErr}
        </Alert>
          </Text>}
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input  type="email"
                        id='email' 
                        className='form-control' 
                        {...register("email", {required:true})} />
                        {errors.email?.type === 'required' && <Text color='red.600'> * Username is required</Text>}
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
                       id='password' 
                       className='form-control' 
                       {...register("password", {required:true})} />
                       {errors.password?.type === 'required' && <Text color='red.600'> * password is required</Text>}
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox colorScheme='teal'>Remember me</Checkbox>
                  <Text color={'teal.400'}>Forgot password?</Text>
                </Stack>
                <Button
                  bg={'teal.400'}
                  color={'white'}
                  _hover={{
                    bg: 'teal.500',
                    color:'teal.50'
                  }}
                  onClick={handleSubmit(handleLogin)}>
                  Sign in
                </Button>
                {/* {loginErr && loginErr.length !== 0 && <p className='text-danger fw-bold fs-6'>{loginErr}</p>} */}


                <Text color={'teal.400'} fontSize="xl" textAlign="center">
                <NavLink className="nav-link " to="/register">
                  {" "}
                  New user ? Register here
                </NavLink>
              </Text>
              </Stack>
            </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
