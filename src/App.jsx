import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ProtectRoute from "./components/service/ProtectRoute";
import Home from "./components/dashboard/home/Home";
import Book from "./components/dashboard/book/Book";
import Transport from "./components/dashboard/Transport/Transport";
import Settings from "./components/dashboard/settings/Settings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      document.body.setAttribute("data-theme", theme);
    } else {
      document.body.setAttribute("data-theme", "light");
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
