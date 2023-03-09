const express = require('express')
const User = require('../model/user')
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

//POST API FOR USER LOGIN

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({
                error: 'Email and password are required',
            });
        }
        const data = await User.findOne({ email })
        if (!data) {
            return res.status(404).json({
                error: "user not found"
            })
        }
        bcrypt.compare(password, data.password, function (err, result) {
            if (err) {
                return res.status(500).json({
                    error: err.message
                })
            }
            if (result) {
                const { _id, email, password } = data
                return res.status(200).json({
                    status: "Success",
                    user: { _id, email, password },
                    message: "user logged in successully"
                })
            }
            else {
                return res.status(500).json({
                    error: "password not matched"
                })
            }
        })
    } catch (e) {
        return res.status(404).json({
            status: "Failled",
            error: e.message
        })
    }
})
module.exports = router