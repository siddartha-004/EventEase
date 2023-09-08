const express = require('express')
const eventApp = express.Router();
const expressAsyncHandler = require('express-async-handler')
const { ObjectId } = require('mongodb'); 


eventApp.use(express.json())

const cors = require('cors');
eventApp.use(cors());

//posting events
eventApp.post('/post-event', expressAsyncHandler(async (req,res) => {
    const eventCollectionObj = req.app.get('eventCollectionObj')
    const newEvent = req.body 
    await eventCollectionObj.insertOne(newEvent);
    res.status(201).send({message:"event has been posted"})
    console.log("event posted! Details:\n",newEvent)
}
))

//get events
eventApp.get('/get-event', expressAsyncHandler(async (req,res) => {
    const eventCollectionObj = req.app.get('eventCollectionObj')
    eventCollectionObj.find().toArray().then((eventsList)=>{
        res.status(201).send({message:"getting events list...",payload:eventsList})
    }).catch((err)=>{
        console.log(err)
        res.send({message:"error",errMessage:err.message})
    })
}
))

//deleting events 
eventApp.delete('/delete-event/:id', expressAsyncHandler(async (req,res) => {
    const eventCollectionObj = req.app.get('eventCollectionObj')
    deleteObj= req.params.id
    console.log(deleteObj)
    const objectId = new ObjectId(deleteObj);
    eventCollectionObj.deleteOne({"_id": objectId}).then(
        (delRes) => {
            console.log(delRes)
            res.status(200).send({message:'user deleted'})
        }).catch((err)=>{
            console.log("error deleting")
            console.log(err)
            res.send({message:"error",errMessage:err.message})
        })
}
))

//updating events 
eventApp.put('/edit-event', expressAsyncHandler(async (req,res) => {
    const eventCollectionObj = req.app.get('eventCollectionObj')
    modifiedEvent = req.body
    
    const objectId = new ObjectId(modifiedEvent._id);
    console.log(modifiedEvent, objectId)
    delete modifiedEvent._id;
    eventCollectionObj.updateOne({"_id": objectId},{$set:{...modifiedEvent}}).then(
        (modRes) => {
            console.log(modRes)
            res.status(200).send({message:'event updated'})
        }).catch((err)=>{
            console.log("error updating")
            console.log(err)
            res.send({message:"error",errMessage:err.message})
        })
}
))





module.exports=eventApp;