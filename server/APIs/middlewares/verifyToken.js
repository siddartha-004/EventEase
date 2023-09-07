//middleware to verify the token recieved
const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) =>{
    const bearerToken = req.headers.authorization
    if(bearerToken===undefined){
        res.send({message :"Unauthorised access. Please log in first"})
    }
    else{
       const token = bearerToken.split(" ")[1] 
       try{
        jwt.verify(token, 'abcdef')
        next();
       }
       catch (err) {
        next(new Error("Session expired. Please log in again")) 
       }
       
    }
}

module.exports =  verifyToken;