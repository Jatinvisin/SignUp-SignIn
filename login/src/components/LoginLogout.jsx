import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Login from './Login'
import Registration from './Registration'
import { Link } from 'react-router-dom'

const LoginLogout = () => {
    
   
  const users = useSelector(state => state.users)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const [active,setActive]= useState("SignUp")
  return (
    
    <div>
     {
        users.map(user => <div key={user.id}>username : {user.username} and password :  {user.password}</div>)
      }
      

      <nav>
        <Link onClick={()=> setActive("SignUp")}>SignUp</Link>
        <br/>
        <Link  onClick={()=> setActive("LogIn")}>Login</Link>
      </nav>
      <div>
        {active === "SignUp" && <Registration/>}
        
      </div>

     
      {
        user
        ? <input type='button' value='Logout' onClick={()=>{
          dispatch({
            type:'LOGOUT'
          })

        }}/>
        :<Login/>
      }
    </div>
  )
}

export default LoginLogout
