import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Signup.css";
const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate =useNavigate()

  const handleSubmit = (e) => {e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input))
    navigate('/Login')
  }
  return (
    <div>
      <div className="sur">
        <form onSubmit={handleSubmit}>
          <h1>Signup</h1>
          <div className="inputs">
            <input
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="text"
              placeholder="Enter your name"
            />
            <FaCircleUser className="ico" />
          </div>
          <div className="inputs">
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              placeholder="Enter your email"
            />
            <MdEmail className="ico" />
          </div>

          <div className="inputs">
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              placeholder="Enter your password"
            />
            <FaLock className="ico" />
          </div>
          <div className="remember-me">
            <label>
              <input type="checkbox" />
              Remember Me
            </label>
          </div>
          <button type="submit">Signup</button>
          <p className="login">
            Already Registered? <Link to='/Login'
            ><a href="">Login</a></Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
