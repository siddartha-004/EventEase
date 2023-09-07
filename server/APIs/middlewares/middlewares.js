const express = require('express');

const app = express();
app.use(express.json());

const invalidPathMiddleware = (req,res,next) => {
    res.send({message:`invalid path`})
}

app.use("*", invalidPathMiddleware)


const errorHandlingMiddleware = (error,req,res, next) => {
    res.send({message: error.message})
}

app.use(errorHandlingMiddleware)

module.exports = {invalidPathMiddleware, errorHandlingMiddleware}