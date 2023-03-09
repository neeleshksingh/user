const express = require('express')
const User = require('../model/user')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//PUT API FOR EDIT PROFILE OF THE USER

router.put("/edit/:id", async(req,res)=>{
    try{
        const data = await User.findOne({_id:req.params.id})
        if(data){
            const update = await User.updateOne({_id:req.params.id}, {...req.body})
            return res.status(200).json({
                status: "success",
                message: "User data updated successfully",
                update
            })
        }
        else{
            return res.status(404).json({
                message: "There is no User with that id"
            })
        }
    } catch(e){
        res.status(404).json({
            message : e.message
        })
    }
})

module.exports = router