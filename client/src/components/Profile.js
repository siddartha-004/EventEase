// import React from 'react';
// import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
// import { FaEdit,FaEnvelope,FaMapMarkerAlt,FaPhone } from "react-icons/fa";

// function Profile() {
//   return (
//     // <Box p={4}>
//     //   <Flex  mb={4}>
//     //     <Avatar size="xl" name="John Doe" src="https://bit.ly/broken-link" />
//     //     <Flex direction="column" ml={4}>
//     //       <Heading size="lg">John Doe</Heading>
//     //       <Text fontSize="md" color="gray.500">john.doe@example.com</Text>
//     //       <Button leftIcon={<FaEdit />} size="sm" variant="ghost">Edit Profile</Button>
//     //     </Flex>
//     //   </Flex>
//     //   <Flex direction="column">
//     //     <Flex align="center" mb={4}>
//     //       <Box mr={4}>
//     //         <FaPhone size={20} />
//     //       </Box>
//     //       <Text fontSize="md">+1 234 567 890</Text>
//     //     </Flex>
//     //     <Flex align="center" mb={4}>
//     //       <Box mr={4}>
//     //         <FaEnvelope size={20} />
//     //       </Box>
//     //       <Text fontSize="md">john.doe@example.com</Text>
//     //     </Flex>
//     //     <Flex align="center">
//     //       <Box mr={4}>
//     //         <FaMapMarkerAlt size={20} />
//     //       </Box>
//     //       <Text fontSize="md">123 Main St, City, Country</Text>
//     //     </Flex>
//     //   </Flex>
      
//     //   <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
//     //     <Heading size="md" mb={2}>About Me</Heading>
//     //     <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor justo ac vestibulum fermentum.</Text>
//     //   </Box>
//     //   <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
//     //     <Heading size="md" mb={2}>Contact Information</Heading>
//     //     <Text fontSize="md">Email: john.doe@example.com</Text>
//     //     <Text fontSize="md">Phone: +1 234 567 890</Text>
//     //     <Text fontSize="md">Address: 123 Main St, City, Country</Text>
//     //   </Box>
      
//     // </Box>
//     // <Box p={4}>
//     //   <Flex direction={{ base: "column", md: "row" }} align={{ base: "center", md: "stretch" }} mb={4}>
//     //     {/* Avatar column */}
//     //     <Box flex="none" mr={{ base: 0, md: 4 }}>
//     //       <Avatar size="xl" name="John Doe" src="https://bit.ly/broken-link" />
//     //     </Box>

//     //     {/* User information column */}
//     //     <Flex direction="column" flex={1}>
//     //       <Heading size="lg">John Doe</Heading>
//     //       <Text fontSize="md" color="gray.500">john.doe@example.com</Text>
//     //       <Button leftIcon={<FaEdit />} size="sm" variant="ghost" mt={2}>Edit Profile</Button>
//     //     </Flex>
//     //   </Flex>

//     //   {/* Contact information */}
//     //   <Flex direction="column">
//     //     <Flex align="center" mb={4}>
//     //       <Box mr={4}>
//     //         <FaPhone size={20} />
//     //       </Box>
//     //       <Text fontSize="md">+1 234 567 890</Text>
//     //     </Flex>
//     //     <Flex align="center" mb={4}>
//     //       <Box mr={4}>
//     //         <FaEnvelope size={20} />
//     //       </Box>
//     //       <Text fontSize="md">john.doe@example.com</Text>
//     //     </Flex>
//     //     <Flex align="center">
//     //       <Box mr={4}>
//     //         <FaMapMarkerAlt size={20} />
//     //       </Box>
//     //       <Text fontSize="md">123 Main St, City, Country</Text>
//     //     </Flex>
//     //   </Flex>

//     //   {/* About Me section */}
//     //   <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
//     //     <Heading size="md" mb={2}>About Me</Heading>
//     //     <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor justo ac vestibulum fermentum.</Text>
//     //   </Box>

//     //   {/* Contact Information section */}
//     //   <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
//     //     <Heading size="md" mb={2}>Contact Information</Heading>
//     //     <Text fontSize="md">Email: john.doe@example.com</Text>
//     //     <Text fontSize="md">Phone: +1 234 567 890</Text>
//     //     <Text fontSize="md">Address: 123 Main St, City, Country</Text>
//     //   </Box>
//     // </Box>
//     <Box p={4}>
//       <Flex direction={{ base: "column", md: "row" }} align={{ base: "center", md: "stretch" }} mb={4}>
//         {/* User information column */}
//         <Flex direction="column" flex={1} mr={{ base: 0, md: 4 }}>
//           <Heading size="lg">John Doe</Heading>
//           <Text fontSize="md" color="gray.500">john.doe@example.com</Text>
//           <Button leftIcon={<FaEdit />} size="sm" variant="ghost" mt={2}>Edit Profile</Button>

//           {/* Contact information */}
//           <Flex direction="column" mt={4}>
//             <Flex align="center" mb={2}>
//               <Box mr={2}>
//                 <FaPhone size={20} />
//               </Box>
//               <Text fontSize="md">+1 234 567 890</Text>
//             </Flex>
//             <Flex align="center" mb={2}>
//               <Box mr={2}>
//                 <FaEnvelope size={20} />
//               </Box>
//               <Text fontSize="md">john.doe@example.com</Text>
//             </Flex>
//             <Flex align="center">
//               <Box mr={2}>
//                 <FaMapMarkerAlt size={20} />
//               </Box>
//               <Text fontSize="md">123 Main St, City, Country</Text>
//             </Flex>
//           </Flex>
//         </Flex>

//         {/* About Me column */}
//         <Box bg="gray.100" p={4} borderRadius="md" flex={1}>
//           <Heading size="md" mb={2}>About Me</Heading>
//           <Text fontSize="md">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor justo ac vestibulum fermentum.</Text>
//         </Box>
//       </Flex>

//       {/* Contact Information section */}
//       <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
//         <Heading size="md" mb={2}>Contact Information</Heading>
//         <Text fontSize="md">Email: john.doe@example.com</Text>
//         <Text fontSize="md">Phone: +1 234 567 890</Text>
//         <Text fontSize="md">Address: 123 Main St, City, Country</Text>
//       </Box>
//     </Box>
    
//   );
// }

// export default Profile;
// import React, { useState } from "react";
// import {
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   Button,
//   Heading,
//   Divider,
// } from "@chakra-ui/react";

// const ProfilePage = () => {
//   // Initial user details
//   const [userDetails, setUserDetails] = useState({
//     name: "John Doe",
//     email: "john@example.com",
//     bio: "Lorem ipsum dolor sit amet...",
//   });

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails({
//       ...userDetails,
//       [name]: value,
//     });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can perform any action you want with the updated user details
//     console.log("Updated user details:", userDetails);
//   };

//   return (
//     <Box maxW="md" mx="auto" mt={10} p={6} borderWidth="1px" borderRadius="lg">
//       <Heading as="h1" mb={4} textAlign="center">
//         Edit Profile
//       </Heading>
//       <Divider mb={6} />
//       <form onSubmit={handleSubmit}>
//         <FormControl id="name" mb={4}>
//           <FormLabel>Name</FormLabel>
//           <Input
//             type="text"
//             name="name"
//             value={userDetails.name}
//             onChange={handleInputChange}
//           />
//         </FormControl>
//         <FormControl id="email" mb={4}>
//           <FormLabel>Email address</FormLabel>
//           <Input
//             type="email"
//             name="email"
//             value={userDetails.email}
//             onChange={handleInputChange}
//           />
//         </FormControl>
//         <FormControl id="bio" mb={4}>
//           <FormLabel>Bio</FormLabel>
//           <Input
//             as="textarea"
//             name="bio"
//             value={userDetails.bio}
//             onChange={handleInputChange}
//           />
//         </FormControl>
//         <Button colorScheme="blue" type="submit">
//           Save
//         </Button>
//       </form>
//     </Box>
//   );
// };

// export default ProfilePage;

import React,{useState,useEffect,useContext} from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import x from "./checked.png"

import {
  Box,
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Heading,
  Divider,
  Flex,
  Image,DrawerFooter,Input,DrawerBody,DrawerHeader,DrawerCloseButton,DrawerContent,DrawerOverlay,Drawer,useDisclosure,
  Text,
  Icon,Accordion,AccordionPanel,AccordionIcon,AccordionButton,AccordionItem,
  List,
  ListItem,
  Progress,Spacer,
  Center,
} from '@chakra-ui/react';
import { Radio, Timeline,Result } from 'antd';
import { LoginContext } from '../contexts/LoginContext';
import { FaGlobe, FaGithub, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const ProfilePage = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [userObj, setUserObj] = useState({});
  const [user, getUser ] = useContext(LoginContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [mode, setMode] = useState('left');
  useEffect(() => {
   console.log(user)
    if (user) {
    
        console.log("kl",user)
     
        setUserObj(user);
       
    } else {
        getUser();
    }
}, [user, getUser]);
 console.log(user,userObj)
  const onChange = (e) => {
    setMode(e.target.value);
  };
  const btnRef = React.useRef();
  return (
    <Box px={10} py={6}>
      <Container maxW="full" px={10} py={20} bg="gray.100" rounded="lg" border="1px" borderColor="gray.900">
        

        <Flex mb={4}>
          <Box mr={8} bg={'blackAlpha.200'} px={4} py={4} rounded={'md'}>
            <Box mb={4}>
              <Image
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                alt="avatar"
                borderRadius="full"
                boxSize="150px" justifyContent="center" ml={5}
              />
              <Text color="gray.500" mb={2}>Full Stack Developer</Text>
              <Text color="gray.500" mb={3}>Bay Area, San Francisco, CA</Text>
              <Flex justifyContent="center" py={10}> 
                <Button>Follow</Button>
                <Button variant="outline" ml={1}>Message</Button>
              </Flex>
            </Box>

            {/* <Box>
              <List spacing={3} rounded="md">
                <ListItem d="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <Icon as={FaGlobe} color="yellow.400" />
                  <Text>https://mdbootstrap.com</Text>
                </ListItem>
                <ListItem d="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <Icon as={FaGithub} color="#333333" />
                  <Text>mdbootstrap</Text>
                </ListItem>
                <ListItem d="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <Icon as={FaTwitter} color="#55acee" />
                  <Text>@mdbootstrap</Text>
                </ListItem>
                <ListItem d="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <Icon as={FaInstagram} color="#ac2bac" />
                  <Text>mdbootstrap</Text>
                </ListItem>
                <ListItem d="flex" justifyContent="space-between" alignItems="center" p={3}>
                  <Icon as={FaFacebook} color="#3b5998" />
                  <Text>mdbootstrap</Text>
                </ListItem>
              </List>
            </Box> */}
          </Box>

          <Box flex="4" bg="white" px={3} rounded={'lg'}>
            <Box mb={2} py={4}>
              <Heading as="h3" fontSize="lg" mb={2}>Full Name</Heading>
              <Text color="gray.500">Johnatan Smith</Text>
            </Box>
            <Divider mb={2} borderColor={'blackAlpha.400'}/>

            <Box mb={2}>
              <Heading as="h3" fontSize="lg" mb={2}>Email</Heading>
              <Text color="gray.500">example@example.com</Text>
            </Box>
            <Divider mb={2} borderColor={'blackAlpha.400'}/>

            <Box mb={2}>
              <Heading as="h3" fontSize="lg" mb={2}>Phone</Heading>
              <Text color="gray.500">(097) 234-5678</Text>
            </Box>
            <Divider mb={2} borderColor={'blackAlpha.400'}/>

            <Box mb={2}>
              <Heading as="h3" fontSize="lg" mb={2}>Mobile</Heading>
              <Text color="gray.500">(098) 765-4321</Text>
            </Box>
            <Divider mb={2} borderColor={'blackAlpha.400'}/>

            <Box mb={2}>
              <Heading as="h3" fontSize="lg" mb={2}>Address</Heading>
              <Text color="gray.500">Bay Area, San Francisco, CA</Text>
            </Box>
          </Box>
        </Flex>

       
        <Heading as='h3' size='lg' color='red.400'>My registered events</Heading>
        {(user?.events_registered?.length!=0)?((user.events_registered).map((item, index) => (
        <Flex mb={4}>
          
      <Box borderWidth="1px" borderRadius="lg" p={4} mb={4} flex="4">
      
        <Text fontSize="xl" fontWeight="bold" mb={2}>
          {item.name}
        </Text>
        <Flex><img width="18" src={x}  style={{height:"18px"}}/>&nbsp;&nbsp;<Text mb={4}>Registered</Text></Flex>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Event Details</DrawerHeader>

          <DrawerBody style={{ height: '1000px' }}>
           
            <>
     
      <Timeline className="bigger-timeline"
        mode={mode}
        items={[
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ]}
      />
    </>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} colorScheme='blue' onClick={onClose}>
              Back
            </Button>
            
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
        <Spacer />
        <Flex justifyContent="right" mt={-12}>
          <Button
            variant="ghost"
            onClick={() => setShowDetails(!showDetails)}
            leftIcon={showDetails ? null : <MdKeyboardArrowDown/>}
          >
            {showDetails ? "Hide Details" : "Show Details"}
          </Button>
        </Flex>
        {showDetails && (
          <Box mt={4}>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Additional Details:
            </Text>
            <Text>additionalDetails</Text>
          </Box>
        )}
       
        
        
       
      </Box>
     
    </Flex>))):
    <Flex>
    <div style={{textAlign:"center"}}>
    <Result 
    status="500"
    title="No events registered"
    subTitle="Get ON! lets enhance"
   
  />
  </div>
  </Flex>}
      </Container>
    </Box>
  );
}

export default ProfilePage;

