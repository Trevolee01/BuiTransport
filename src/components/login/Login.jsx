import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./Login.css"
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const userString = localStorage.getItem('user');
    if (!userString) {
      alert('No user found. Please register first');
      return;
    }

    const logg = JSON.parse(userString);
    if (!logg) {
      alert('Invalid user data');
      return;
    }

    if (input.email === logg.email && input.password === logg.password) {
      localStorage.setItem("isLoggedIn", "true"); // Changed to match ProtectRoute
      navigate('/home');
    }
    else if (input.email !== logg.email && input.password === logg.password) {
      alert('No account found with this email. Please register!');
    }
    else {
      alert('Incorrect email or password');
    }
  }

  return (
    <div className='container'>
      <div className='log'>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              placeholder="abc@gmail.com"
              required
            />
            <i>
              <MdEmail className="icon" />
            </i>
          </div>
          <div className="input">
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Enter your password"
              required
            />
            <FaLock className="icon" />
          </div>
          <div className='remember'>
            <a href=''>Forgot Password?</a>
          </div>
          <button type='submit'>Login</button>
          <div className="register">
            <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
