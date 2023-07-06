import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {getLocalStorageByKey} from 'utility/helper';

export const PrivateRoutes = (props) => {
    const isAdmin = getLocalStorageByKey('__auth', ['isAuthenticated'])
    const auth = useSelector((state) => state.auth.isAuthenticated || isAdmin?.isAuthenticated);
    return auth ? <Outlet /> : <Navigate to="/dashboard/login" />;
}

export const LoggedIn = (props) => {
    const isAdmin = getLocalStorageByKey('__auth', ['isAuthenticated'])
    const token = useSelector((state) => state.auth.isAuthenticated || isAdmin?.isAuthenticated);
    return token ? <Navigate to="/dashboard" /> : <Outlet /> ;
}
export const UserPrivateRoutes = (props) => {
    const auth = useSelector((state) => state.userauth.isAuthenticated);
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default {
    PrivateRoutes,
    LoggedIn,
    UserPrivateRoutes
};

