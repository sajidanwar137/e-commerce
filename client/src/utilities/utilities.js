import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function LoggedIn(props) {
    const token = useSelector((state) => state.auth.isAuthenticated);
    return token ? <Navigate to="/dashboard" /> : <Outlet /> ;
}

