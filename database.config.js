const mongoose = require('mongoose')

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL)
        console.log('Mongo connected at', conn.connection.host)
    } catch (err) {
        console.log('Error mongoose', err)
    }
}
module.exports = connectDB;