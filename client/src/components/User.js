import React,{ useContext, useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react';
import Events from './Events'
import './styles.css'
import { LoginContext } from '../contexts/LoginContext';
import AddEvent from './AddEvent';
import axios from 'axios';


function User() {


  const [eventCard, setEventCard] = useState([]);

  useEffect(() =>{
    axios.get("http://localhost:8000/event-api/get-event")
    .then((response)=>{
      setEventCard(response.data.payload)
    })
  });

  let [user, , , , ]= useContext(LoginContext);
  return (
    <div className='userpage-container'>
      {user.role==="admin" ? (<AddEvent/>):(eventCard.length===0? (<Text fontSize={'3xl'} color={'teal.700'} fontWeight={'extrabold'}>No events to display ┬┬﹏┬┬ </Text>):(<Text fontSize={'3xl'} color={'teal.700'} fontWeight={'extrabold'}>{eventCard.length} Events :</Text>))}
      {}
      <div className='eventlist-container'>
      {Array.isArray(eventCard) ? (
          eventCard.map((val) => (
            <Events data={val} key={val.id} />
          ))
        ) : (
          <Text>Loading events ...</Text>
        )}
      </div>
    </div>
  )
}

export default User