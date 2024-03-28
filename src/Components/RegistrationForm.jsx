import axios from 'axios'
import './RegistrationForm.css'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegistrationForm = () => {
    const navigate=useNavigate()
    const [input,setInput] = new useState(
        {   
                "Name":"",
                "Age": "",
                "Mobile":"",
                "Gender":"",
                "Email":"",
                "Password":"",
                "ConfirmPassword":""
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

const readValues = async () => {
    try {
        const response = await axios.post("http://localhost:3001/api/music/user/signup", input);
        console.log("Response:", response);
        if (response.status === 200 && response.data.status === "success") {
            console.log("User registered successfully");
            setTimeout(() => {
                alert("User Registered Successfully");
                navigate("/login");
            }, 500); // Adjust the delay time as needed
        } else if (response.data.status === "Passwords Not Match") {
            console.log("Passwords do not match");
            setTimeout(() => {
                alert("Passwords are not Matching");
            }, 500); // Adjust the delay time as needed
        } else {
            console.log("Registration failed");
            setTimeout(() => {
                alert("Something went wrong");
            }, 500); // Adjust the delay time as needed
        }
    } catch (error) {
        console.error("Error occurred:", error);
        setTimeout(() => {
            alert("An error occurred while registering. Please try again later.");
        }, 500); // Adjust the delay time as needed
    }
};

  return (
    
      <body className='register-page'>

<div className="container register">
<form action=''>
        <h1>New User Registration</h1>
        <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" name="Name" defaultValue={input.Name} onChange={inputHandler} required/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Age</label>
                        <input type="text"  name="Age" defaultValue={input.Age} onChange={inputHandler} required/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Mobile</label>
                        <input type="text"  name="Mobile" defaultValue={input.Mobile} onChange={inputHandler} required/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Gender</label>
                        <select className="select-box"name="Gender" defaultValue={input.Gender} onChange={inputHandler} required>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="trans">Trans</option>
                            </select>
                        </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Email</label>
                        <input type="email"  name="Email" defaultValue={input.Email} onChange={inputHandler} required/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Password</label>
                        <input type="password"  name="Password" defaultValue={input.Password} onChange={inputHandler} required/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 input-box">
                        <label htmlFor="" className="form-label">Confirm Password</label>
                        <input type="password" name="ConfirmPassword" defaultValue={input.ConfirmPassword} onChange={inputHandler} required/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                       <center> <button type="submit" onClick={handleRegister}>Register</button></center>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 go-back">
                       <center><p><Link to="/login" className="nav-link">Go Back to Login</Link></p></center>
                       <center> <p><Link to="/" className="nav-link">Go Back to Home</Link></p> </center>
                    </div>
                </div>
                </form>
            </div>
      </body>
    
  )
}

export default RegistrationForm
