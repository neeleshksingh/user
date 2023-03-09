
const express = require('express')
const connection = require('./connection/connection')
connection()
const Login = require('./routes/login')
const Register = require('./routes/register')
const Edit = require('./routes/editProfile')
const User = require('./routes/users')

const app = express()

app.use(Login)
app.use(Register)
app.use(Edit)
app.use(User)

app.get("*", (req, res) => {
    res.status(404).send("API IS NOT FOUND");
})

app.listen(3090 || process.env.PORT, () => { console.log("Listening on port 3090") })