import React,{ useContext, useState, useEffect } from 'react'
import { Text } from '@chakra-ui/react';
import Events from './Events'
import './styles.css'
import { LoginContext } from '../contexts/LoginContext';
import AddEvent from './AddEvent';
import axios from 'axios';


function User() {


  const [eventCard, setEventCard] = useState([]);

  

  let [user, , , , ]= useContext(LoginContext);
  useEffect(() =>{
    // console.log("User Role:", user.role);
    axios.get("http://localhost:3000/event-api/get-event")
    .then((response)=>{
      console.log(response.data.payload)
      setEventCard(response.data.payload)
    })
  },[]);
 
  
  return (
    <div className='userpage-container'>
      {user&&user.role==="admin" ? (<AddEvent/>):(eventCard.length===0? (<Text fontSize={'3xl'} color={'teal.700'} fontWeight={'extrabold'}>No events to display ┬┬﹏┬┬ </Text>):(<Text fontSize={'3xl'} color={'teal.700'} fontWeight={'extrabold'}>{eventCard.length} Events :</Text>))}
      {}
      <div className='eventlist-container'>
      {Array.isArray(eventCard) ? (
          eventCard.map((val) => (
            <Events data={val} key={val.id} setEventCard={setEventCard}/>
          ))
        ) : (
          <Text>Loading events ...</Text>
        )}
      </div>
    </div>
  )
}

export default User