import Login from "./components/login/Login";
import TransHome from "./components/transport organizers/TransHome/TransHome";
import TransSettings from "./components/transport organizers/TransSettings/TransSettings";
import Signup from "./components/signup/Signup";
import ProtectRoute from "./components/service/ProtectRoute";
import Home from "./components/dashboard/home/Home";
import AllOrganization from "./components/admin/Admin-home/AllOrganization";
import Book from "./components/dashboard/book/Book";
import Transport from "./components/dashboard/Transport/Transport";
import AdminHome from "./components/admin/Admin-home/AdminHome";
import Settings from "./components/dashboard/settings/Settings";
import AdminSettings from "./components/admin/AdminSettings/AdminSettings";
import { Outlet } from "react-router-dom";
import PastBooking from "./components/dashboard/home/PastBooking";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { useEffect } from "react";

const RoleRoute = ({ element, allowedRoles }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole");

  if (!isLoggedIn || !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" replace />;
  }

  return element || <Outlet />;
};

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
          <Route path="/" element={<Navigate to="/login" replace />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectRoute />}>
            <Route
              path="/home"
              element={
                <RoleRoute allowedRoles={["student"]} element={<Home />} />
              }
            />
            <Route
              path="/pastBooking"
              element={
                <RoleRoute
                  allowedRoles={["student"]}
                  element={<PastBooking />}
                />
              }
            />

            <Route
              path="/book"
              element={
                <RoleRoute allowedRoles={["student"]} element={<Book />} />
              }
            />
            <Route
              path="/transport"
              element={
                <RoleRoute allowedRoles={["student"]} element={<Transport />} />
              }
            />
            <Route
              path="/settings"
              element={
                <RoleRoute allowedRoles={["student"]} element={<Settings />} />
              }
            />
          </Route>

          <Route
            path="/AdminHome"
            element={
              <RoleRoute allowedRoles={["admin"]} element={<AdminHome />} />
            }
          />
          <Route
            path="/AllOrganization"
            element={
              <RoleRoute
                allowedRoles={["admin"]}
                element={<AllOrganization />}
              />
            }
          />

          <Route
            path="/AdminSettings"
            element={
              <RoleRoute allowedRoles={["admin"]} element={<AdminSettings />} />
            }
          />
          <Route
            path="/TransHome"
            element={
              <RoleRoute
                allowedRoles={["transport organizer"]}
                element={<TransHome />}
              />
            }
          />
          <Route
            path="/TransSettings"
            element={
              <RoleRoute
                allowedRoles={["transport organizer"]}
                element={<TransSettings />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
