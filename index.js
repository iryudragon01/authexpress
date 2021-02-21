const { Router } = require('express')
const express = require('express')
const app =express()
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')



// Import Routes
const authRouter = require('./routers/auth')

//view engine setup
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')

// Route Middleware
app.use(express.json());
app.use('/api/user',authRouter)

mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true }, 
    ()=>{
        app.listen(process.env.PORT || 3000 , ()=>{
            console.log('Server up and running')
        })
    })