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
    role: "student" // default role
  });

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(input))
    navigate('/Login')
  }
  
  return (
    <div className="container">
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
          <div className="inputs">
            <select
              name="role"
              value={input.role}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-white bg-transparent"
              required
            >
              <option value="student" className="text-black">Student</option>
              <option value="admin" className="text-black">Admin</option>
              <option value="transport organizer" className="text-black">Transport Organizer</option>
            </select>
          </div>
          <div className="remember-me">
            <label>
              <input type="checkbox" required />
              Remember Me
            </label>
          </div>
          <button type="submit">Signup</button>
          <p className="login">
            Already Registered? <Link to='/Login'>Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
