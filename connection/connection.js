const mongoose = require('mongoose')
mongoose.set(`strictQuery`, true)
async function getConnection() {
    await mongoose.connect(`mongodb+srv://neelesh:neelesh@cluster0.muwj7wy.mongodb.net/?retryWrites=true&w=majority`).then(() => {
        console.log('database connected successfuly');
    })
}
module.exports = getConnection