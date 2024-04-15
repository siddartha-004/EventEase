import React,{ useContext,useState,useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Button,Flex,ModalFooter,Text,Stack, Box, Image, Divider, StackDivider,IconButton,ButtonGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel,  Input, Select, Checkbox} from '@chakra-ui/react'
import { DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';
import './styles.css'
import { useForm, Controller } from 'react-hook-form';

function Events(props) {
    const [user, getUser ] = useContext(LoginContext);
    const [userObj, setUserObj] = useState({});
    const [showEditComponent, setShowEditComponent] = useState(false);
    const [selectedCourseDuration, setSelectedCourseDuration] = useState('');

    useEffect(() => {
        
        if (user) {
            setUserObj(user);
        } else {
            getUser();
        }
    }, [user, getUser]);
console.log(user,userObj)
    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

    const handleDelete = (id) =>{
        console.log(id)
        axios.delete(`api/Student/deleteEvent?id=${id}`);
    }
    const handleFormSubmit=(data)=>{
        console.log(data)
    }

    const handleEdit = (id) => {
        console.log(id);
        setShowEditComponent(true);
        reset();
    };

    const handleSave = (data) => {
        const eventDataToUpdate = { id: props.data.id, ...data };
        axios.put("http://localhost:3000/event-api/edit-event23", eventDataToUpdate);
        props.setEventCard((prevEventCard) => {
            const updatedIndex = prevEventCard.findIndex((event) => event.id === eventDataToUpdate.id);
            const updatedEventCard = [...prevEventCard];
            updatedEventCard[updatedIndex] = eventDataToUpdate;
            return updatedEventCard;
        });
        setShowEditComponent(false);
    };

    return (
        <div>
            <Card size={'sm'} variant={'filled'} m={'15px'}>
    
                {/* rendering header */}
                <CardHeader>
                    <Heading size='md'>
                        {showEditComponent ? (
                        <Controller name="name"
                        control={control}
                        defaultValue={props.data.name}
                        render={({ field }) => (
                        <div>
                            <Input {...field} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                            {errors.name && <Text>{errors.name.message}</Text>}
                        </div>
                        )}/>
                    ):(
                    <Text>{props.data.name}</Text>)}
    
                    {/* rendering admin features */}
                    {user.role==="admin" ? (
                        <ButtonGroup size='md' isAttached variant='outline' float={'right'}>
                            <IconButton  colorScheme='red' fontSize='20px' icon={<DeleteIcon />} onClick={() => handleDelete(props.data.id)}
                        />
                            <IconButton colorScheme='yellow' icon={<EditIcon />} onClick={() => handleEdit(props.data.id)}/>
                        </ButtonGroup>
                    ):null}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='2'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>What</Heading>
                            {showEditComponent ? (
                            <Controller name="what"
                            control={control}
                            defaultValue={props.data.what}
                            render={({ field }) => (
                            <div>
                                <Input {...field} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                                {errors.what && <Text>{errors.what.message}</Text>}
                            </div>
                            )}/>
                            ):(
                            <Text pt='2' fontSize='sm'>{props.data.what}</Text>)}
                            
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>When</Heading>
                            {showEditComponent ? (
                            <Controller name="when"
                            control={control}
                            defaultValue={props.data.when}
                            render={({ field }) => (
                            <div>
                                <Input {...field} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                                {errors.when && <Text>{errors.when.message}</Text>}
                            </div>
                            )}/>
                            ):(
                            <Text pt='2' fontSize='sm'>{props.data.when}</Text>)}
                            
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>Where</Heading>
                            {showEditComponent ? (
                            <Controller name="where"
                            control={control}
                            defaultValue={props.data.where}
                            render={({ field }) => (
                            <div>
                                <Input {...field} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                                {errors.where && <Text>{errors.when.where}</Text>}
                            </div>
                            )}/>
                            ):(
                            <Text pt='2' fontSize='sm'>{props.data.where}</Text>)}
                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter>
                    {showEditComponent?(<Button type="submit" variant='outline' mr={'30px'} colorScheme='green' onClick={handleSubmit(handleSave)}>
                    Save
                  </Button>):null}{
                    userObj?.role!=="admin"&&(
                        <Button variant='solid' colorScheme='teal' onClick={handleOpen}> Register </Button>
                    )
                  }
                    <Modal isOpen={isOpen} onClose={handleClose} size="full">
            <ModalOverlay />
            <ModalContent className="custom-modal" >
                <Box display="flex" alignItems="center" ml={7}>
            <Box>
        <Image src="https://turinghut.org/static/ac9fc244821c2fd626d0bf51b1951514/862e9/turing-cup2023.jpg" boxSize="50px" objectFit="cover" borderRadius="md" />
      </Box>
      <Box ml={4}>
        <Heading as="h2" size="lg" color="teal.500" mb={4} py={6}>{props.data.name}</Heading>
      </Box>
      </Box>
           
            <Divider />
              <ModalHeader ml={6}>Candidate Details</ModalHeader>
              <Divider />
              <ModalCloseButton />
              <ModalBody ml={6}>
                <form onSubmit={handleSubmit}>
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" placeholder="Enter your email" />
                    </FormControl>
                    <FormControl id="mobile" isRequired>
                      <FormLabel>Mobile</FormLabel>
                      <Input type="tel" placeholder="Enter your mobile number" />
                    </FormControl>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" placeholder="Enter your first name" />
                    </FormControl>
                    <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" placeholder="Enter your last name" />
                    </FormControl>
                    <FormControl id="gender" isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select placeholder="Select your gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl id="instituteName" isRequired>
                      <FormLabel>Institute Name</FormLabel>
                      <Input type="text" placeholder="Enter your institute name" />
                    </FormControl>
                    <FormControl id="type" isRequired>
                      <FormLabel>Type</FormLabel>
                      <Select placeholder="Select type">
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="staff">Staff</option>
                      </Select>
                    </FormControl>
                    <FormControl id="course" isRequired>
                      <FormLabel>Course</FormLabel>
                      <Input type="text" placeholder="Enter your course" />
                    </FormControl>
                    <FormControl id="courseSpecialization" isRequired>
                      <FormLabel>Course Specialization</FormLabel>
                      <Input type="text" placeholder="Enter your course specialization" />
                    </FormControl>
                    {/* <FormControl id="courseDuration" isRequired>
                                        <FormLabel>Course Duration</FormLabel>
                                        <Stack spacing={4}>
                                            <Box
                                                borderWidth="1px"
                                                borderRadius="lg"
                                                overflow="hidden"
                                                cursor="pointer"
                                                borderColor={selectedCourseDuration === '4 years' ? 'teal.500' : 'gray.200'}
                                                bg={selectedCourseDuration === '4 years' ? 'teal.50' : 'white'}
                                                p={4}
                                                onClick={() => setSelectedCourseDuration('4 years')}
                                            >
                                                <Heading size="md">4 Years</Heading>
                                                
                                            </Box>
                                            <Box
                                                borderWidth="1px"
                                                borderRadius="lg"
                                                overflow="hidden"
                                                cursor="pointer"
                                                borderColor={selectedCourseDuration === '5 years' ? 'teal.500' : 'gray.200'}
                                                bg={selectedCourseDuration === '5 years' ? 'teal.50' : 'white'}
                                                p={4}
                                                onClick={() => setSelectedCourseDuration('5 years')}
                                            >
                                                <Heading size="md">5 Years</Heading>
                                                
                                            </Box>
                                            
                                        </Stack>
                                    </FormControl> */}
                    {/* <FormControl id="courseDuration" isRequired>
                      <FormLabel>Course Duration</FormLabel>
                      <Input type="text" placeholder="Enter your course duration" />
                    </FormControl> */}
                    <FormControl id="courseDuration" isRequired>
        <FormLabel>Course Duration</FormLabel>
        <Flex>
            <Box
              
                width="120px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
                borderColor={selectedCourseDuration === '4 years' ? 'teal.500' : 'gray.200'}
                bg={selectedCourseDuration === '4 years' ? 'teal.50' : 'white'}
                p={4}
                onClick={() => setSelectedCourseDuration('4 years')}
            >
                <Heading size="md" color={selectedCourseDuration === '4 years' ? 'teal.500' : 'gray.600'}>4 Years</Heading>
                
            </Box>
            <Box
               
                width="120px"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                cursor="pointer"
                borderColor={selectedCourseDuration === '5 years' ? 'teal.500' : 'gray.200'}
                bg={selectedCourseDuration === '5 years' ? 'teal.50' : 'white'}
                p={4}
                onClick={() => setSelectedCourseDuration('5 years')}
                ml={4} // Add margin between the cards
            >
                <Heading size="md" color={selectedCourseDuration === '5 years' ? 'teal.500' : 'gray.600'}>5 Years</Heading>
                
            </Box>
        </Flex>
    </FormControl>
    
                    <FormControl id="differentlyAbled">
                      <Checkbox>Differently Abled</Checkbox>
                    </FormControl>
                    <FormControl id="countryOfResidence" isRequired>
                      <FormLabel>Country of Residence</FormLabel>
                      <Input type="text" placeholder="Enter your country of residence" />
                    </FormControl>
                    <FormControl id="agreeToTerms" isRequired>
                      <Checkbox>
                        I agree to the <a href="/terms" target="_blank" rel="noopener noreferrer">terms and conditions</a>.
                      </Checkbox>
                    </FormControl>
                    {/* <Button mt={4} colorScheme="teal" type="submit">
                      Register
                    </Button> */}
                  </Stack>
                </form>
              </ModalBody>
              <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={handleClose}>
          Back
        </Button>
        <Button colorScheme="teal" onClick={handleSubmit(handleFormSubmit)}>
          Submit
        </Button>
      </ModalFooter>
            </ModalContent>
          </Modal>
                    <Button variant='outline' colorScheme='red' ml={'30px'}> ❤ WishList</Button>
                </CardFooter>
            </Card>
        </div>
      )
                }
    export default Events;