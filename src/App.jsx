import Login from "./components/login/Login"
import Signup from "./components/signup/Signup" 
import ProtectRoute from "./components/service/ProtectRoute";
import { BrowserRouter, Routes,Route } from "react-router-dom"
import './index.css'
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>

      <Route path="/" element={<ProtectRoute />}></Route>
      
    </Routes>
      
      </BrowserRouter>  
      </>
    
  );
}

export default App
