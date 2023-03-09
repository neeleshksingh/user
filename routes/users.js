const express = require('express')
const User = require('../model/user')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//GET API FOR GETTING ALL THE USERS

router.get('/', async(req,res)=>{
    try{
        const data = await User.find()
        return res.status(202).json({
            status: "Success",
            data
        })
    } catch(e){
        res.status(404).json({
            message: e.message
        })
    }
})

module.exports = router