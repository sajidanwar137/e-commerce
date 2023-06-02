import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoutes(props) {
    const auth = useSelector((state) => state.auth.isAuthenticated);
    return auth ? <Outlet /> : <Navigate to="/dashboard/login" />;
}

