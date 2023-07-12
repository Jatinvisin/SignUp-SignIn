import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import './login.css'



const Login = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const dispatch = useDispatch()
   
    const users = useSelector(state => state.users)
    const navigate = useNavigate()


    const login = ()=> {
        
        if(!username){
            alert("Enter Valid username")
            return
        }
        
        
        const payload = users.find(user => user.username === username && user.password === password)

        if(payload){
            dispatch({
                type:"LOGIN",
                payload
            })
            
            alert("Successfully Logged in !!")
            navigate('/dashboard')

        }else{
            alert("Wrong Credentials !!")
        }
        

    }

    
  return (
    <div className='login-container'>
        <h2>Login page</h2>
         <form className='register'>

            
            <input type='text' placeholder='username 'value={username} onChange={e => setUsername(e.target.value)}/>
            <input type='password' placeholder='password 'value={password} onChange={e => setPassword(e.target.value)}/>
        
            <button className='login-button' value="Login" onClick={(login)} >Login</button>
            <br/>
            <p>If dont have a account . Please Register </p>
            <Link   to= '/signup'>Sign Up</Link>


            
        </form>
    </div>
     
       
    
  )
}

export default Login
