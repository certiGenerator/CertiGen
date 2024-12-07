import React, { useState } from "react"
import "./Login.css";
import { NavLink ,useNavigate} from "react-router-dom";
import axios from 'axios';
import {ToastContainer} from "react-toastify"
import { handleError, handleSuccess } from "../../utils/Utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate=useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", {
        email,
        password,
      }

    );
  
      if (response.data.success) {
        handleSuccess("Login successFully")
        setTimeout(()=>{
          navigate('/')
        },6000)
      } else {
        console.log(response.data.message);
        return handleError("Invalid username or password")        

      }
    } catch (error) {
      alert("Error logging in: " + (error.response?.data?.message || error.message));
      console.error(error);
    }
  };
  

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Welcome back!</h1>
        <h2>  Let's pick up where we left off 💻 </h2>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <h4><NavLink to="/register">Don't have account ? Registered </NavLink></h4>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default Login;
