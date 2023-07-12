import React from 'react'
import { useNavigate } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
    const navigate = useNavigate()

  return (
    <div className='homepage-container'>
    <div className='buttom-container'>
    <h1>This is Homepage</h1>
      <button className="signup-button" onClick={()=>navigate('/login')}>Login</button>
      <button className="login-button" onClick={()=> navigate('/signup')}>SignUp</button>
    </div>

    </div>
  )
}

export default Homepage
