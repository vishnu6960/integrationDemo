const express = require("express")
const app = express()
const mongoose = require("mongoose")
const User = require("./schema.js")
const cors = require("cors")
const bcrypt = require("bcryptjs")

const uri = "mongodb+srv://vishnu:root123@demo.dwtmq.mongodb.net/"
mongoose.connect(uri)
    .then(() => console.log("connected to mongoDB"))
    .catch(err => console.log("connection failed", err))

app.use(express.json())
app.use(cors())

// app.get("/api/books", async (req, res) => {
//     try {
//         const books = await Book.find()
//         // console.log(books)
//         res.status(200).json(books)
//     }
//     catch (err) {
//         res.status(500).json({ message: "server error" })
//     }
// })

app.post("/api/signup", async (req, res) => {
    const { name, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)


    // console.log(users)
    try {
        const userExists = await User.findOne({ email })
        // console.log(userExists)
        if (userExists) {
            console.log("user already exists")
            return res.status(400).json({ message: "user already exists" })
        }
        console.log("user does not exist")
        res.status(200).json({ message: 'User does not exist' })
        const newUser = new User({ name, email, password: hashedPassword })
        await newUser.save()
        res.json({ message: "user registered successfully" })
    }
    catch (err) {
        res.json({ message: "user already registered" })
    }
})

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body
    console.log(email)
    const user = await User.findOne({ email })
    console.log(user)
    if (!user) {
        res.status(400).json({ message: "user is not found" })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
        res.status(400).json({ message: "Invalid credentials" })
    }
    else {
        console.log("login successful")
    }
})

// async function createBook() {
//     const newBook = new Book({
//         title: 'The Great Gatsby',
//         author: 'F. Scott Fitzgerald',
//         year: 1925,
//         genres: ['Fiction', 'Classic']
//     })

//     const savedBook = await newBook.save()
//     console.log(savedBook)
// }
// for (let i = 0; i < 10; i++) {
//     createBook()
// }

app.listen(5000, () => {
    console.log("server is running on 5000")
})