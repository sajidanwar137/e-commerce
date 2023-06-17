import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = (props) => {
    const auth = useSelector((state) => state.auth.isAuthenticated);
    return auth ? <Outlet /> : <Navigate to="/dashboard/login" />;
}

export const LoggedIn = (props) => {
    const token = useSelector((state) => state.auth.isAuthenticated);
    return token ? <Navigate to="/dashboard" /> : <Outlet /> ;
}

export default {
    PrivateRoutes,
    LoggedIn
};

