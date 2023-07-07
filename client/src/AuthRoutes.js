import React from 'react';
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import {getLocalStorageByKey} from 'utility/helper';

export const PrivateRoutes = () => {
    const isAdmin = getLocalStorageByKey('__auth', ['isAuthenticated', 'token'])
    const auth = useSelector((state) => state.auth.isAuthenticated || (isAdmin?.isAuthenticated && isAdmin?.token !== null));
    return auth ? <Outlet /> : <Navigate to="/dashboard/login" />;
}

export const LoggedIn = () => {
    const isAdmin = getLocalStorageByKey('__auth', ['isAuthenticated', 'token'])
    const token = useSelector((state) => state.auth.isAuthenticated || (isAdmin?.isAuthenticated && isAdmin?.token !== null));
    return token ? <Navigate to="/dashboard" /> : <Outlet /> ;
}
export const UserPrivateRoutes = () => {
    const auth = useSelector((state) => state.userauth.isAuthenticated);
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export default {
    PrivateRoutes,
    LoggedIn,
    UserPrivateRoutes
};

