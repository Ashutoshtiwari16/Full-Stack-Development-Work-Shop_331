import axios from 'axios'
import { useState } from 'react'

const Usersignup = () => {
  const [user, setUser] = useState({
    name: '',
    id: '',
    email: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post(
        'http://localhost:4000/create',
        user
      )

      console.log(response.data)

      alert('User created successfully!')
      setUser({
        name: '',
        id: '',
        email: '',
      })
    } catch (error) {
      console.error('Error:', error)

      alert('Something went wrong!')
    }
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>User Sign Up</h2>

        <label htmlFor="name">Name</label>

        <input
          id="name"
          name="name"
          type="text"
          value={user.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="id">User ID</label>

        <input
          id="id"
          name="id"
          type="number"
          value={user.id}
          onChange={handleChange}
          placeholder="Enter your user ID"
          required
        />

        <label htmlFor="email">Email</label>

        <input
          id="email"
          name="email"
          type="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Usersignup