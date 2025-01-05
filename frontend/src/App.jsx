import React, { useEffect, useState } from 'react'
import axios from "axios"
// import process from "process"

const App = () => {
  
  // const [books, setBooks] = useState([])
  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  })
  const [loginFormData, setLoginFormData] = useState({
    loginEmail:"",
    loginPassword:""
  })
  // console.log(books)

  // const fetchData = async () => {
  //   try{
  //     const response = await axios.get(`http://localhost:5000/api/books`)
  //     // const result = await response.json()
  //     console.log(response)
  //     setBooks(response.data)
  //   }
  //   catch(err){
  //     console.log("fetching books is failed", err)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
    setLoginFormData({...loginFormData, [name]: value})

    
  }

  const handleSignUp = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:5000/api/signup", formData)
    }
    catch(err) {
      alert("user already exists")
      console.log("signing up is failed", err)
    }
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:5000/api/login", loginFormData)
    }
    catch(err) {
      // alert("invalid credentials")
      console.log("login failed", err)
    }
  }


  return (
    <div>
      <h1>Books list</h1>
      {/* <ul>
        {books.map(book => (
          <li key={book._id}>{book.title} by {book.author} in {book.year}</li>
        ))}
      </ul> */}
      <form onSubmit={handleSignUp} id='sign_up'>
        <label>Name : </label>
        <input type="text" name='name' value={formData.name} onChange={handleChange} /><br />
        <label>Email : </label>
        <input type="email" name='email' value={formData.email} onChange={handleChange} /><br />
        <label>Password : </label>
        <input type="password" name='password' value={formData.password} onChange={handleChange} /><br />
        <button type='submit'>Sign Up</button>
      </form>

      <form onSubmit={handleLogin} id='login'>
        <label>Email : </label>
        <input type="email" name='loginEmail' value={loginFormData.email} onChange={handleChange} /><br />
        <label>Password : </label>
        <input type="password" name='loginPassword' value={loginFormData.password} onChange={handleChange} /><br />
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default App
