import React,{ useContext,useState,useEffect } from 'react'
import { Card, CardHeader,Tooltip, CardBody, CardFooter,Heading,Button,Flex,ModalFooter,Text,Stack, Box, Image, Divider, StackDivider,IconButton,ButtonGroup, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, FormControl, FormLabel,  Input, Select, Checkbox} from '@chakra-ui/react'
import { DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';
import { Result } from 'antd';
import Swal from 'sweetalert2';
import './styles.css'
import { useForm, Controller } from 'react-hook-form';

function Events(props) {
    const [user, getUser ] = useContext(LoginContext);
    const [userObj, setUserObj] = useState({});
    const [showEditComponent, setShowEditComponent] = useState(false);
    const [selectedCourseDuration, setSelectedCourseDuration] = useState('');

    useEffect(() => {
        if (user) {
          if (user && user.events_registered) {
            const registeredEventsIds = user.events_registered.map(event => event.id);
            setIsRegistered(registeredEventsIds.includes(props.data.id));
        } else {
            setIsRegistered(false);
        }
            setUserObj(user);
           
        } else {
            getUser();
        }
    }, [user, getUser]);
console.log(user,userObj)
    const {register,
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    
    const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const [isRegistered, setIsRegistered] = useState(false);

    const handleDelete = (id) =>{
        console.log(id)
        axios.delete(`api/Student/deleteEvent?id=${id}`);
        reset();
    }
    const [show,setShow]=useState(false);
  


    const handleEdit1 = (id) => {
      console.log("1")
      setShowEditComponent(true);
      reset({
          name: props.data.name,
          what: props.data.what,
          when: props.data.when,
          where: props.data.where
      });
  };

    const handleSave1 = (data) => {
      console.log("kooi")
        const eventDataToUpdate = { id: props.data.id, ...data };
        axios.put("api/Student/editevent", eventDataToUpdate);
        props.setEventCard((prevEventCard) => {
            const updatedIndex = prevEventCard.findIndex((event) => event.id === eventDataToUpdate.id);
            const updatedEventCard = [...prevEventCard];
            updatedEventCard[updatedIndex] = eventDataToUpdate;
            console.log("updated",updatedEventCard)
            return updatedEventCard;
        });
        setShowEditComponent(false);
    };
    // const submisson=(data)=>{
    //   data.courseDuration=selectedCourseDuration;
    //   delete data.agreeToTerms;
    //   data.eventdetails=props.data;
    //   delete data.eventdetails.registered;
    //   axios.post("api/Student/registerToEvent",data).then((response) => {
    //     console.log(response.status)
    //     if(response.status===200){
    //       setShow(true)
    //       console.log("event posted!");
        
    //   }
    //   })
    //   console.log("lll",data)

     
    // }
    // const submisson=(data)=>{
    //   data.courseDuration=selectedCourseDuration;
    //   delete data.agreeToTerms;
    //   data.eventdetails=props.data;
    //   delete data.eventdetails.registered;
    //   axios.post("api/Student/registerToEvent",data).then((response) => {
    //     console.log(response.status)
    //     if(response.status===200){
    //       setShow(true)
    //       console.log("event posted!");
        
    //   }
    //   })
    //   console.log("lll",data)

     
    // }
    // const submisson = (data) => {
    //   swal({
    //     title: "Are you sure?",
    //     text: "Once submitted, your registration will be final.",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willSubmit) => {
    //     if (willSubmit) {
    //       // User confirmed, proceed with submission
    //       data.courseDuration = selectedCourseDuration;
    //       delete data.agreeToTerms;
    //       data.eventdetails = props.data;
    //       delete data.eventdetails.registered;
          
    //       axios.post("api/Student/registerToEvent", data)
    //       .then((response) => {
    //         console.log(response.status);
    //         if (response.status === 200) {
    //           setShow(true);
    //           console.log("Event registration successful!");
    //         }
    //       })
    //       .catch((error) => {
    //         console.error("Error occurred during event registration:", error);
    //         // Handle errors here, perhaps display another SweetAlert
    //       });
    //     } else {
    //       // User canceled submission
    //       swal("Your registration is safe!", { icon: "info" });
    //     }
    //   });
    // };
    const submisson = (data) => {
 
      Swal.fire({
        title: "Registration Confirmation ",
        text: `Do you want to register to this event " ${props.data.name} " ?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, proceed!",
        customClass: {
          container: 'custom-swal-container', // Apply CSS for custom styling
         
        },
      }).then((result) => {
        console.log(result)
        if (result.isConfirmed) {
          console.log("kkkkkkk")
          data.courseDuration=selectedCourseDuration;
            delete data.agreeToTerms;
            data.eventdetails=props.data;
            delete data.eventdetails.registered;
            axios.post("api/Student/registerToEvent",data).then((response) => {
              console.log(response.status)
              if(response.status===200){
              
                Swal.fire({
                  icon: 'success',
                  title: 'Registered to event successfully',
               
                  text: 'See you soon Onboard.',
                });
                console.log("event posted!");
                setIsRegistered(true);
                handleClose();
              
              }
              else{
                Swal.fire()
              }
        } )}})
    };
    

    return (
        <div>
            <Card size={'sm'} variant={'filled'} m={'15px'}>
    
                {/* rendering header */}
                <CardHeader>
                    <Heading size='md'>
                        {showEditComponent ? (
                       
                            <Input {...register("name")} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                           
                        
                        )
                    :(
                    <Text>{props.data.name}</Text>)}
    
                    {/* rendering admin features */}
                    {user.role==="admin" ? (
                        <ButtonGroup size='md' isAttached variant='outline' float={'right'}>
                            <IconButton  colorScheme='red' fontSize='20px' icon={<DeleteIcon />} onClick={() => handleDelete(props.data.id)}
                        />
                            <IconButton colorScheme='yellow' icon={<EditIcon />} onClick={() => handleEdit1(props.data.id)}/>
                        </ButtonGroup>
                    ):null}
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack divider={<StackDivider />} spacing='2'>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>What</Heading>
                            {showEditComponent ? (
                            
                                <Input {...register("what")} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                              
                            
                         
                            ):(
                            <Text pt='2' fontSize='sm'>{props.data.what}</Text>)}
                            
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>When</Heading>
                            {showEditComponent ? (
                            
                                <Input {...register("when")} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                                
                            
                         
                            ):(
                            <Text pt='2' fontSize='sm'>{props.data.when}</Text>)}
                            
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>Where</Heading>
                            {showEditComponent ? (
                            
                                <Input {...register("where")} width={'90%'} borderBottom={'1px'} bg={('BlackAlpha.400')}/>
                              
                            ):(
                            <Text pt='2' fontSize='sm'>{props.data.where}</Text>)}
                        </Box>
                    </Stack>
                </CardBody>
                <CardFooter>
                    {showEditComponent?(<Button type="submit" variant='outline' mr={'30px'} colorScheme='green' onClick={()=>handleSave1()}>
                    Save
                  </Button>):null}{userObj?.role !== "admin" && (
  isRegistered ? (
    <Tooltip hasArrow label='Already Registered' bg='red.400'>
    <Button variant='solid' color='#FC8181' colorScheme='whiteAlpha'  disabled  _disabled={{ cursor: 'not-allowed' }}>
   
   Register</Button></Tooltip>
  ) : (
    <Button variant='solid' colorScheme='teal' onClick={handleOpen}>Register</Button>
  )
)}

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
             
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input type="email" placeholder="Enter your email" className="form-control" id="email" {...register("email",{required:true})}/>
                    </FormControl>
                    <FormControl id="mobile" isRequired>
                      <FormLabel>Mobile</FormLabel>
                      <Input type="tel" placeholder="Enter your mobile number" className="form-control" id="mobile"  {...register("mobile",{required:true})}/>
                    </FormControl>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" placeholder="Enter your first name" className="form-control" id="firstName" {...register("firstName",{required:true})}/>
                    </FormControl>
                     <FormControl id="lastName" isRequired>
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" placeholder="Enter your last name" className="form-control"  id="lastName" {...register("lastName",{required:true})} />
                    </FormControl> 
                    <FormControl id="gender" isRequired>
                      <FormLabel>Gender</FormLabel>
                      <Select placeholder="Select your gender" className="form-control"  {...register("gender", { required: "Gender is required" })}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </Select>
                    </FormControl>
                    <FormControl id="instituteName" isRequired>
                      <FormLabel>Institute Name</FormLabel>
                      <Input type="text" className="form-control"  placeholder="Enter your institute name" id="instituteName" {...register("instituteName", { required: "Institute name is required" })}/>
                    </FormControl>
                     <FormControl id="type" isRequired>
                      <FormLabel>Type</FormLabel>
                      <Select placeholder="Select type"  className="form-control" id="type" {...register("type", { required: "Type is required" })}>
                        <option value="student">Student</option>
                        <option value="faculty">Faculty</option>
                        <option value="staff">Staff</option>
                      </Select>
                    </FormControl>
                    <FormControl id="course" isRequired>
                      <FormLabel>Course</FormLabel>
                      <Input type="text" className="form-control" placeholder="Enter your course" id="course" {...register("course", { required: "Course is required" })}  />
                    </FormControl>
                    <FormControl id="courseSpecialization" isRequired>
                      <FormLabel>Course Specialization</FormLabel>
                      <Input type="text" className="form-control" placeholder="Enter your course specialization" id="courseSpecialization" {...register("courseSpecialization", { required: "Course specialization is required" })}/>
                    </FormControl>
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
        <input type="hidden" {...register("courseDuration", { value: selectedCourseDuration })} />

    </FormControl>
    
                    <FormControl id="differentlyAbled">
                      <Checkbox {...register("differentlyAbled")}>Differently Abled</Checkbox>
                    </FormControl>
                   <FormControl id="countryOfResidence" isRequired>
                      <FormLabel>Country of Residence</FormLabel>
                      <Input type="text" placeholder="Enter your country of residence" {...register("countryOfResidence", { required: "Country of residence is required" })}/>
                    </FormControl>
                    <FormControl id="agreeToTerms" >
                      
                      <Checkbox {...register("agreeToTerms", { required: true })}>
                        I agree to the terms and conditions
                      </Checkbox>
                    </FormControl>    
                    {/* <Button mt={4} colorScheme="teal" type="submit">
                      Register
                    </Button> */}
                  </Stack>
              
              </ModalBody>
              <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={handleClose}>
          Back
        </Button>
       
        <Button colorScheme="teal" onClick={handleSubmit(submisson)}>
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