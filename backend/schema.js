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
    password: { type: String, required: true, minlength: 4 }
})
const User = mongoose.model('User', userSchema)
module.exports = User