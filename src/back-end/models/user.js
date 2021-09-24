const Joi = require('joi')
const mongoose = require('mongoose')

const User = mongoose.model('User',new mongoose.Schema({
    firstname:{
        type:String,
        maxlength:50        
    },
    lastname:{
        type:String,
        maxlength:50        
    },
    email:{
        type:String,
        maxlength:255,
        unique:true
    },     
    metamaskid:{
        type:String,
        maxlength:255,
        unique:true
    }, 
    phone:{
        type:String,
        maxlength:255
    },
    password:{
        type:String,
        maxlength:1024
    }
}))

function validateEmailUser(user){
    const schema={
        firstname:Joi.string().min(1).max(50).required(),
        lastname:Joi.string().min(1).max(50).required(),
        email:Joi.string().min(1).max(50).required().email(),
        phone:Joi.string().min(1).max(50).required(),
        password:Joi.string().min(1).max(100).required(),
    };
    return Joi.object(schema).validate(user);
}

function validateMetaUser(user){
    const schema={        
        metamaskid:Joi.string().min(1).max(100).required(),
        password:Joi.string().min(1).max(100).required(),
    };
    return Joi.object(schema).validate(user);
}
function validateProfile(req) {
    const schema = {
        token:Joi.string().min(1).max(50).required(),
        firstname:Joi.string().min(1).max(50).required(),
        lastname:Joi.string().min(1).max(50).required(),
        email:Joi.string().min(1).max(50).required().email(),
        phone:Joi.string().min(1).max(50).required(),
        metamaskid:Joi.string().min(1).max(50).required(),        
        password:Joi.string().min(1).max(100).required(),
    };
    return Joi.object(schema).validate(req);    
}
exports.User = User;
exports.validateSaveProfile = validateProfile;
exports.validateEmail = validateEmailUser;
exports.validateMeta = validateMetaUser;