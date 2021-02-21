const express = require('express')
const router = express.Router()
const User = require('../model/User')
const {registerValidation , loginValidation} = require('../validation')

router.get('/register', (req,res,nex)=>{
    res.render('user/register')
})
router.post('/register', async (req,res,nex)=>{
    console.log(req.body.email)
    //validation
    const { error } = registerValidation(req.body)
    console.log(error)
    if (error) return res.status(400).send(error)
    const user = User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    await user.save()
    .then(result => res.send({'result':result}))
    .catch(err => res.status(400).send({"error":err}))
})
module.exports = router