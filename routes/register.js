const express = require('express')
const User = require('../model/user')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//POST API FOR USER REGISTERING

router.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        const { email, name, password, contact } = req.body
        if (!email || !name || !password) {
            return res.status(404).json({
                status: "failled",
                error: "Enter all the fields"
            })
        }
        bcrypt.hash(password, 10, async (err, hashedPass) => {
            if (err) {
                return res.status(409).json({
                    status: "failed",
                    message: err.message
                })
            }
            const data = await User.create({
                email,
                password: hashedPass,
                name,
                contact
            })
            return res.status(200).json({
                status: "success",
                message: "signup successfully",
                data,
            })
        })
    } catch (e) {
        return res.status(404).json({
            error: e.message
        })
    }
})

module.exports = router