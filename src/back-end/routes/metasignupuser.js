const { User, validateMeta } = require('../models/user');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {
    const {error} = validateMeta(req.body)
   
    if (error){
        return res.send(error.details[0].message)
    }
   
    let user = await User.findOne({metamaskid:req.body.metamaskid})
    if (user){
        return res.send('That user already exisits')
    }else{
        user = new User({
            firstname:'',
            lastname:'',
            email:'',
            metamaskid:req.body.metamaskid,
            phone:'',
            password:req.body.password
        })
        console.log(user)
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password,salt)
        await user.save().then(item => {
            console.log("item saved to database");
          })
          .catch(err => {
            console.log("unable to save to database",err);
          });
        console.log("signuped user",user)
        res.send(JSON.stringify({
            metamaskid:user.metamaskid,
            id:user.id
        }))
    }    
});


module.exports = router;