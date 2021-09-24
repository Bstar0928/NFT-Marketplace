const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken');
const _ = require('lodash');

router.post('/', async (req, res) => {
    console.log("profile body",req.body)
    const {error} = validateProfile(req.body)

    if (error){
        return res.send(error.details[0].message)
    }

    let user = await User.findOne({_id:req.body.token})

    console.log(user)
    if (!user){      
        return res.send('User does not exit')     
    }   
    res.send(JSON.stringify(user));
    console.log('profile user',user)   
        
});
function validateProfile(req) {
    const schema = {
        token: Joi.string().min(5).max(255).required(),        
    };
    return Joi.object(schema).validate(req);    
}

module.exports = router;