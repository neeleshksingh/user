const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: { type: String, unique: true, required:true },
    name: {type: String},
    contact : {type:Number},
    password: {type: String, required:true}
}, { timestamps: true });

const User = mongoose.model('User', userSchema)

module.exports = User