const { User, validate } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const Joi = require('joi')
const jwt = require('jsonwebtoken');
const _ = require('lodash');

router.post('/', async (req, res) => {
    const {error} = validateSignin(req.body)

    if (error){
        return res.send(error.details[0].message)
    }
    console.log("validated",req.body)
    let user = await User.findOne({email:req.body.email})
    let state = false
    console.log(user)
    if (!user){
        console.log("metamask find")
        user = await User.findOne({metamaskid:req.body.email})
        if (!user)
            return res.send('User does not exit')
        state = true
        console.log("metamask finded")
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password);

    if (!validPassword) {
        return res.send('Incorrect email or password.');
    }
    //const token = jwt.sign({ _id: user._id }, 'PrivateKey');
    const token = user._id
    if (!state)
        res.send(JSON.stringify({
            email:user.email,
            password:user.password,
            token:token
        }));
    else
        res.send(JSON.stringify({
            email:user.metamaskid,
            password:user.password,
            token:token
        }));

    console.log(token)
    console.log('sign in sucess')
    console.log(req.body)
        
});
function validateSignin(req) {
    const schema = {
        email: Joi.string().min(1).max(255).required(),
        password: Joi.string().min(1).max(255).required()
    };
    return Joi.object(schema).validate(req);    
}

module.exports = router;