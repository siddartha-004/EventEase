import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Flex, Box, FormControl,FormLabel,Input,InputGroup, InputRightElement,Stack,Button,Heading,Text,useColorModeValue} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

import {useForm} from 'react-hook-form'
import axios from 'axios';
import {NavLink, useNavigate} from 'react-router-dom';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);


  let navigate = useNavigate();

  let [err, setErr] = useState("")

  let {
    register, 
    handleSubmit,
    formState: {errors},
  } = useForm();

  let addNewUser = (newUser) => {
    const uuid = uuidv4();
    newUser.userId=uuid;
    newUser.role="user";
    axios.post("http://localhost:3000/user-api/register", newUser)
    .then((response) => {
      if(response.status===201){
        navigate('/login')
        setErr("")
      }
      else {
        setErr(response.data.message)
      }
    })
    .catch(err => {
      if(err.response){
        setErr(err.message)
      }
      if(err.request){
        setErr(err.message)
      }
    })
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create a new Account.
          </Heading>
          <div className="error-message">
                {err.length!==0 && <Text color='red.600'>{err}</Text>}
          </div>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4} >
            <FormControl id="firstName" isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type="text"
              id='name' 
              className='form-control' 
              {...register("name", {required:true})}/>
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email"
              id='email' 
              className='form-control' 
              {...register("email", {required:true})} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} 
                id='password' 
                className='form-control' 
                {...register("password", {required:true})}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}
                onClick={handleSubmit(addNewUser)}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'} color={'teal.400'}>
                Already a user? <NavLink color={'teal.400'} to="/login">Login</NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
