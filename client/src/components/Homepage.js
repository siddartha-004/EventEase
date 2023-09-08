import React,{useContext} from 'react'
import './styles.css'
import { Button, Text,Alert,AlertIcon,AlertTitle,AlertDescription} from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'
import { LoginContext } from '../contexts/LoginContext';

function Homepage() {
  let [, , userLoginStatus, ,] = useContext(LoginContext);
  return (
    <div className='home-container'>
      {userLoginStatus ? null : 
      <Alert
        bg='teal.400'
          status='info'
          variant='subtle'
          flexDirection='column'
          alignItems='center'
          justifyContent='center'
          textAlign='center'
          height='200px'
        >
          <AlertIcon boxSize='40px' mr={0} color='teal.200' />
          <AlertTitle mt={4} mb={1} fontSize='lg'>
            Events can be viewed only if you're logged in!
          </AlertTitle>
          <AlertDescription maxWidth='sm'>
            Please Log in to view and register for events. SignUp if you dont have an account.
          </AlertDescription>
        </Alert>}
        
        <div className='box'>
          <div className='text'>
          <Text fontSize="3xl">This is EventEase.</Text>
          <Text fontSize="lg">EventEase empowers users to effortlessly create events tailored to their specific needs. Our platform offers customizable event templates, allowing organizers to quickly set up event pages with essential details such as date, time, location, and ticketing options. Users can easily add descriptions, images, and branding elements to make their events unique.</Text>
          </div>
          <div className='image'>
          <img src="https://www.eventbuilder.rocks/hubfs/Overwhelmed%20Page%20Assets/EB_MOONBOARD%201.png" alt='an event illustration' />
          </div>
        </div>
        <div className='box'>
          <div className='image'>
          <img src="https://d1jj76g3lut4fe.cloudfront.net/processed/with_watermark/BP22949ULccIa13hWu.png?Expires=1691848689&Signature=ifaWvRwTZP63ZA9k21-CxCX3xx9HCuGmesoscTyfvFJlFbTfZ8K1U6cLIGfbnLdzzsfl5Qc7KkMas2E8F6SBtRR4~BXQMnE~e4GtrpU8gCJxjr04nh2RFGfqB~wJ5ThK~CAEmsVHIg0NdclgTh7aaua1dxbsXoqmhSZKbFYUhhjO-zk~HFlU0Bc6PXruhFwWKgcl2P~neFKA9-O-UBwzlQO4U4a3OQjZLZTGqMQlUQJmQL35RT~iw4FFzEZMYUUnMu44WMnkUOcYqsPK27k9AQz-Xsl7gnjWIVgwNp8Kr-nKmg2iLxJhtH8Jaz2x3gIzJlDJmZ8YxeE~NAKYAmdBcA__&Key-Pair-Id=K2YEDJLVZ3XRI" alt='' />
          </div>
          <div className='text'>
          <Text fontSize="3xl">At EventEase,</Text>
          <Text fontSize="lg">We provide a user-friendly platform with intuitive tools for event creation, attendee management, ticketing, and promotion. Our goal is to empower individuals and organizations to host memorable events without the complexities typically associated with event planning.</Text>
          <Text fontSize="lg">With EventEase, you gain access to features like customizable event pages, RSVP tracking, secure payment processing, and comprehensive event analytics, ensuring that your events run smoothly and efficiently.</Text>
          </div>
        </div>
        {userLoginStatus ? null :(<div className='box last'> 
        <div>
        <Text fontSize="2xl">Register Now to explore and attend events!</Text>
          <Button fontSize="2xl" bg={'teal.400'}
                  color={'white'}
                  _hover={{
                    bg: 'teal.500',
                    color:'teal.50'
                  }} fontWeight={'thin'}><NavLink to="/register">Register</NavLink></Button>
        </div>
        <div>
          <img src="https://cdni.iconscout.com/illustration/premium/thumb/user-registration-4489364-3723271.png" alt=''/>
        </div>
        </div>)}
        
    </div>
  )
}

export default Homepage