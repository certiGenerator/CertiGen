import React, { useState } from "react";
import "./Register.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { handleError, handleSuccess } from "../../utils/Utils";


const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/api/auth/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      // console.log(response);

     
      
      if (response.data.success) {
        handleSuccess("Registered Successfully");
        setTimeout(()=>{
          navigate('/')
        },6000)
      } else {
        console.log("Registration error");
        handleError("Error during Registration.Please try again")
      }
    } catch (error) {
      console.log("Registration error:", error.message);
      handleError("Error during Registration.Please try again")
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Create Your Account </h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            // id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            // id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            // id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            // id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="register-button" onSubmit={handleSubmit}>
          Register
        </button>
        <h4><NavLink to="/login">Already registered ? SignIn</NavLink></h4>

      </form>
    </div>
  );
};

export default RegisterPage;
