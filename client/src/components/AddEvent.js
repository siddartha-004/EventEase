import React from 'react';
import {useDisclosure,Button,Modal,ModalOverlay, ModalContent, ModalHeader,ModalCloseButton,ModalBody,FormControl,ModalFooter,FormLabel,Input} from '@chakra-ui/react';
import {useForm} from 'react-hook-form';
import axios from 'axios';

function AddEvent() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)

    let {
        register, 
        handleSubmit,
        formState: {errors},
        reset,
      } = useForm();

      let addNewEvent =(newEvent)=>{
        console.log("posting event...")
        newEvent.id=newEvent.name
        newEvent.registered=null
        console.log(newEvent,"lllll")
        axios.post("api/Student/postevent", newEvent).then((response) => {
          console.log(response.status)
        if(response.status===200){
            console.log("event posted!");
            reset();
        }
        else {
            console.log("error posting event");
        }
        }).catch(err => {
        console.log(err.message)
        })
        onClose();
      }

  return (
    <div>
        <Button m='1rem'colorScheme='teal' variant='outline' onClick={onOpen}> Add Event +</Button>

        <Modal
        initialFocusRef={initialRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Event Details :</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
          <FormControl>
              <FormLabel>Name the event :</FormLabel>
              <Input 
                ref={initialRef} 
                placeholder='enter the name of the event'
                type='text'
                id='name' 
              className='form-control' 
              {...register("name", {required:true})} />
            </FormControl>

            <FormControl>
              <FormLabel>What is the event about?</FormLabel>
              <Input
                placeholder='explain what the event is'
                type='text'
                id='what' 
              className='form-control' 
              {...register("what", {required:true})} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>When is the event?</FormLabel>
              <Input 
                placeholder='what are the dates and timings?'
                type='text'
                id='when' 
              className='form-control' 
              {...register("when", {required:true})} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Where will the event take place?</FormLabel>
              <Input 
                placeholder='where is the location?'
                type='text'
                id='where' 
              className='form-control' 
              {...register("where", {required:true})} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' mr={3} onClick={handleSubmit(addNewEvent)}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </div>
  )
}

export default AddEvent