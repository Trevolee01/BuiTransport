import React, { useState } from 'react'
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import "./Login.css"
import { useNavigate, Link} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState ([{
    email :'',
    password :'',
  }])

  const handleLogin =(e) =>{
    e.preventDefault();
    const userString =localStorage.getItem('user');
    if(!userString){
      alert('No use found.Please register first')
    }
    const logg = JSON.parse (userString);
    if (!logg){
      alert('Invalid user dataa');
      return;
    }
    if(
      input.email===logg.email && input.password === logg.password
    ){
      localStorage.setItem("Loggedin",true);
      navigate('/')
    }
    else if( input.email !=logg.email && input.password === logg.password){
      alert('Dont have account with this gmail. Please register!')
    }
    else{
      alert('incorrect email or password')
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
            setInput({ ...input, [e.target.name]: e.target.value, })
          }
          type="email"
          placeholder="abc@gmail.com"
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
            setInput({ ...input, [e.target.name]: e.target.value, })
          }
          type="password"
          placeholder="Enter your password"
        />
        <FaLock className="icon" />
      </div>
        <div className='remember'>
            <label><input type='checkbox'/>Remember Me</label>
            <a href=''>Forgot Password?</a>
            
        </div>
        <button type='submit'><Link to ='/Login/Home'>Login</Link></button>
        <div className="register">
            <p>Don't have an account?<Link to= '/Signup'><a href=''>Signup</a></Link></p>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
