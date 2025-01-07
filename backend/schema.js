const mongoose = require("mongoose")

// const bookSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     author: { type: String, required: true },
//     year: { type: Number, default: 2000 },
//     genres: [String]
// })

// const Book = mongoose.model('Book', bookSchema)

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 4 },
    role: { type: String, required: true, default: 'user' }
})
const User = mongoose.model('User', userSchema)
module.exports = User