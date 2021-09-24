const { User,validateSaveProfile} = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken');
const _ = require('lodash');

router.post('/', async (req, res) => {
    console.log("save profile body",req.body)
    console.log("password",req.body.password)
    const {error} = validateSaveProfile(req.body)

    if (error){
        return res.send(error.details[0].message)
    }
    console.log("save started")
    password = req.body.password
    const salt = await bcrypt.genSalt(10)
    password = await bcrypt.hash(password,salt)
    console.log("passwoasdfasdfrd",password)

    User.findById(req.body.token, function (err, user) {
 
        user.firstname = req.body.firstname
        user.lastname = req.body.lastname
        user.email = req.body.email
        user.phone = req.body.phone
        user.metamaskid = req.body.metamaskid
        user.password = password
        
        
        user.save().then(item => {
            console.log("item saved to database");
            console.log("updated user",user)
            res.send(JSON.stringify(user));
            console.log('save profile user',user) 
        })
        .catch(err => {
            console.log("unable to save to database",err);
        });
          
    })  
   
        
});

module.exports = router;