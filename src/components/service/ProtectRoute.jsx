import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

const ProtectRoute = () => {
    const auth = localStorage.getItem('isLoggedIn');
    return auth ? <Outlet /> : <Navigate to="/Login" replace />;
}

export default ProtectRoute
