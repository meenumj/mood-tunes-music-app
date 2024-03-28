import React from 'react'
import './LoginPage.css'
import { FaUser,FaLock } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const LoginPage = () => {
    const navigate=useNavigate()
    const [input,setInput] = new useState(
        {   
                "Email":"",
                "Password":""
               }
)

const inputHandler = (event)=>{
    setInput({...input,[event.target.name]:event.target.value})

}

const handleRegister = (event) => {
    event.preventDefault(); // Prevent default form submission
    const form = event.target.form;
    if (form.checkValidity()) {
        readValues(); // Call readValues only if form is valid
    } else {
        alert("Please fill in all required fields."); // Show alert if form is invalid
    }
};


const readValues = ()=>{
    console.log(input)
    axios.post("http://localhost:3001/api/music/user/signin",input).then((response)=>{
        console.log(response.data)
        if (response.data.status=="success") {
            console.log(response.data.userData._id)
            sessionStorage.setItem("userID",response.data.userData._id)//session set value.userID session variable
            navigate("/")
            setInput(  {   
                    
                    "Email":"",
                    "Password":""
                   }
                   )
                  
        } else if(response.data.status=="Invalid User") {
            alert("Invalid User Name")
            setInput(  {   
                    
                "Email":"",
                "Password":""
               }
               )
        }
        else{
            alert("Incorrect Password")
            setInput(  {   
                    
                "Email":"",
                "Password":""
               }
            
               )
        }
    })
}
  return (
    <body className='login-page'>
    <div className='wrapper'>
        <form action=''>
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Email' name="Email" value={input.Email} onChange={inputHandler}required/>
                <FaUser className='icon'/>
                </div>
            <div className="input-box">
                <input type="password" placeholder='Password' name="Password" value={input.Password} onChange={inputHandler} required/>
                <FaLock className='icon' />
                </div>
            <div className="remenber-forgot">
                <label><input type='checkbox' />Remember me</label>
                <a href='#'>Forgot Password?</a>
            </div>
            <button type='submit' onClick={handleRegister}>Login</button>

            <div className="register-link">
            <p>Don't have an account? <Link to='/register'>Register</Link></p>
            </div>

            <div className="register-link">
            <p>Want to Go Back? <Link to='/'>Go to Home</Link></p>
            </div>

        </form>
      
    </div>
    </body>
    
  )
}

export default LoginPage
