const express = require('express')
const cors = require('cors')
const app = express()
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)
const mongoose = require('mongoose')
const emailuser = require('./routes/emailsignupuser')
const metauser = require('./routes/metasignupuser')
const auth = require('./routes/auth')
const profile = require('./routes/profile')
const saveprofile = require('./routes/saveprofile')

mongoose.connect('mongodb://localhost/nftmarketplace')
    .then(()=>console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong',err))

app.use(cors())
app.use(express.json());
app.use('/signin',auth) 

app.use('/emailsignup', emailuser)
app.use('/metasignup', metauser)
app.use('/profile',profile)
app.use('/saveprofile',saveprofile)
app.listen(8080,()=>console.log('API is running on localhost'))

