const express = require('express');
const dotenv = require('dotenv');

const app = express();
app.use(express.json());

const PORT = 8000
app.listen(PORT, () => console.log(`web server listening on port ${PORT} ...`))

const mclient = require('mongodb').MongoClient;

// mclient.connect('mongodb://0.0.0.0:27017/')

dotenv.config();

const connectionString =process.env.ATLAS_URI||'';

mclient.connect(connectionString)
.then((dbRef) => {
    const dbObj = dbRef.db("eventDB")
    const userCollectionObj = dbObj.collection("userscollection")
    app.set('userCollectionObj',userCollectionObj)

    const eventCollectionObj = dbObj.collection("eventscollection")
    app.set('eventCollectionObj',eventCollectionObj)

    console.log("database connection successful.");
})
.catch((err) => console.log("database connection error : ",err))

const userApp = require('./APIs/userAPI') 
app.use('/user-api',userApp)

const eventApp = require('./APIs/eventAPI')
app.use('/event-api',eventApp)