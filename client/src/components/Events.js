import React,{ useContext } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Button,Text,Stack, Box, StackDivider,IconButton,ButtonGroup} from '@chakra-ui/react'
import { DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';

function Events(props) {
    let [user, , , , ]= useContext(LoginContext);

    const handleDelete = (id) =>{
        console.log(id)
        axios.delete(`http://localhost:8000/event-api/delete-event/${id}`);
    }

    // const handleEdit = (id) =>{
    //     console.log(id)
    //     //axios.put
    // }
    

  return (
    <div>
        
        <Card size={'sm'} variant={'filled'} m={'15px'}>
            <CardHeader>
                <Heading size='md'>
                    {props.data.name}
                    {user.role==="admin" ? (
                        <ButtonGroup size='md' isAttached variant='outline' float={'right'}>
                        <IconButton  colorScheme='red' fontSize='20px' icon={<DeleteIcon />} onClick={() => handleDelete(props.data._id)}
                    />
                    <IconButton colorScheme='yellow' icon={<EditIcon />} />
                  </ButtonGroup>
                ):null}
                </Heading>
            </CardHeader>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='2'>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>What</Heading>
                        <Text pt='2' fontSize='sm'>{props.data.what}</Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>When</Heading>
                        <Text pt='2' fontSize='sm'>{props.data.when}</Text>
                    </Box>
                    <Box>
                        <Heading size='xs' textTransform='uppercase'>Where</Heading>
                        <Text pt='2' fontSize='sm'>{props.data.where}</Text>
                    </Box>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button variant='solid' colorScheme='teal'> Register </Button>
                <Button variant='outline' colorScheme='red' ml={'30px'}> ❤ WishList</Button>
            </CardFooter>
</Card>
    </div>
  )
}

export default Events