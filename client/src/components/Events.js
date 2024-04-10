import React,{ useContext,useState,useEffect } from 'react'
import { Card, CardHeader, CardBody, CardFooter,Heading,Button,Text,Stack, Box, StackDivider,IconButton,ButtonGroup, Input} from '@chakra-ui/react'
import { DeleteIcon,EditIcon} from '@chakra-ui/icons'
import { LoginContext } from '../contexts/LoginContext';
import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';

function Events(props) {
    let [user, , , , ]= useContext(LoginContext);
    const [showEditComponent, setShowEditComponent] = useState(false);

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm();
    

    const handleDelete = (id) =>{
        console.log(id)
        axios.delete(`api/Student/deleteEvent?id=${id}`);
    }

    const handleEdit = (id) => {
        console.log(id);
        setShowEditComponent(true);
        reset();
      };

      const handleSave = (data) => {
        // console.log(data)
        const eventDataToUpdate = { id: props.data.id, ...data,};
        console.log(eventDataToUpdate)
        axios.put("/api/Student/editevent",eventDataToUpdate);
        
        props.setEventCard((prevEventCard)=>{
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
              </Button>):null}
                <Button variant='solid' colorScheme='teal'> Register </Button>
                <Button variant='outline' colorScheme='red' ml={'30px'}> ❤ WishList</Button>
            </CardFooter>
        </Card>
    </div>
  )
}

export default Events