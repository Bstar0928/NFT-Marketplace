const { User, validateEmail } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    const {error} = validateEmail(req.body)

    if (error){
        return res.send(error.details[0].message)
    }
    let user = await User.findOne({email:req.body.email})
    if (user){
        return res.send('That user already exisits')
    }else{
        user = new User({
            firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            metamaskid:'',
            phone:req.body.phone,
            password:req.body.password
        })
        console.log(user)
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password,salt)
        await user.save().then(item => {
            console.log("item saved to database");
          })
          .catch(err => {
            console.log("unable to save to database");
          });
        console.log("signuped user",user)
        res.send(JSON.stringify({
            email:user.email,
            id:user.id
        }))
    }    
});


module.exports = router;