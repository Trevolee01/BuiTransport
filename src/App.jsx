import Login from "./components/login/Login"
import Signup from "./components/signup/Signup" 
import ProtectRoute from "./components/service/ProtectRoute";
import Home from "./components/dashboard/home/Home"
import Book from "./components/dashboard/book/Book"
import Transport from "./components/dashboard/Transport/Transport"
import Settings from "./components/dashboard/settings/Settings"

import { BrowserRouter, Routes,Route } from "react-router-dom"
import './index.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="Login/Home" element={<Home/>}></Route>
      <Route path="" element={<ProtectRoute />}></Route>
      <Route path="/Book" element={<Book/>}></Route>
      <Route path="/Transport" element={<Transport/>}></Route>
      <Route path="/Settings" element={<Settings/>}></Route>
    </Routes>
      
      </BrowserRouter>  
      </>
    
  );
}

export default App
