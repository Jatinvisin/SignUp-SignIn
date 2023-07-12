import React, {  useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './signup.css'

const Registration = () => {


    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmPass] = useState('')
    const [email,setEmail] = useState('')
    const navigate = useNavigate()


    const [errorName, setErrorName] = useState('')
    const [nameLen, setNameLen] = useState('')
    const [NumNotAllowed, setNumNotAllowed] = useState('')
    const [errorUsername, setErrorUsername] = useState('')
    const [userLen, setUserLen] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [invalidEmail, setInvalidEmail] = useState('')
    const [errorPwd, setErrorPwd] = useState('')
    const [pwdlen, setPwdlen] = useState('')
    const [errorConfirmPwd, setErrorConfirmPwd] = useState('')
    const [unmatchPwd, setunmatchPwd] = useState('')



    const dispatch = useDispatch()

    const register = () => {
        
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if(!name){
           setErrorName('*Please Enter Your Name')
           return
        }
        else if(/\d/.test(name))
        {
            setNumNotAllowed("*Numbers are not allowed ")
        }
           
        else if (name.length < 6){
            setNameLen("*Name must be six letters")
            return
            
        }
        
        if(!username){
            setErrorUsername("*Please enter username")
            return

        }else if (username.length<6){
            setUserLen("*username must contain six letter")
            return
        }
        else if(/\d/.test(username))
        {
            setNumNotAllowed("*Numbers are not allowed ")
        }
        if(!email){
            setErrorEmail("*Please enter email id ")
            return
        }
        else if(!regex.test(email)){
            setInvalidEmail("*Please Enter Valid email id")
            return
        }
        if(!password){
            setErrorPwd("*Please enter the password")
            return

        }else if (password.length<8){
            setPwdlen("*Weak password ! Please set Again!!")
            return
        }
        if(!confirmpassword){
            setErrorConfirmPwd("*Please enter confirm password")
            return
        }
        if (password === confirmpassword){
            dispatch(
                {
                    type : 'REGISTER',
                    payload : {
                        id : new Date().getTime(),
                        name , username, password
                    }
                }
            )
            navigate('/login')

        }else {
            setunmatchPwd("*Password not matching")
            return
        }
          
    } 

  return (
    <div className='sign-container' >
    <h2>Sign Up page</h2>
    <form className='register'>
        <label>Enter Your Name : </label>
        <input type='text' placeholder='Name' value={name} onChange={e => {
            setErrorName("")
            setNameLen("")
            setNumNotAllowed("")
            setName(e.target.value)
            }} name = "name"/>
        <p className='error'>{errorName}</p>
        <p className='error'>{nameLen}</p>
        <p className='error'>{NumNotAllowed}</p>
        <pre>

            
        </pre>
        <label>Enter Your Username : </label>
        <input type='text' placeholder='username 'value={username} onChange={e => {
            setErrorUsername("")
            setUserLen("")
            setNumNotAllowed("")
            setUsername(e.target.value)}}/>
        <p className='error'>{errorUsername}</p>
        <p className='error'>{userLen}</p>
       
        
        <pre>

       
        </pre>
        <label>Enter Your Email ID : </label>
        <input type='text' placeholder='email 'value={email} onChange={e =>{ 
            setErrorEmail("")
            setInvalidEmail("")
            
            setEmail(e.target.value)}}/>
        <p className='error'>{errorEmail}</p>
        <p className='error'>{invalidEmail}</p>
        <pre>


            
        </pre>
        <label>Set Password : </label>
        <input type='password' placeholder='password 'value={password} onChange={e => {
             setErrorPwd("")
             setPwdlen("")
            setPassword(e.target.value)}}/>
        <p className='error'>{errorPwd}</p>
        <p className='error'>{pwdlen}</p>
        <pre>


            
        </pre>
        <label>Confirm Password: </label>
        <input type='password' placeholder='confirm password 'value={confirmpassword} onChange={e => {
            setErrorConfirmPwd("")
            setConfirmPass(e.target.value)}}/>
        <p className='error'>{errorConfirmPwd}</p>
        <p className='error'>{unmatchPwd}</p>
        <pre>



        </pre>
        <input type='button' value="Register" className='signbutton' onClick={register}/>
         
    </form>

    </div>
    
  )
}

export default Registration
