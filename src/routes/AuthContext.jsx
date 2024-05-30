// AuthContext.js
import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [userRole, setUserRole] = useState('normal');
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

    const loginAsAdmin = () => {
        setUserRole('admin');
        setIsAdminLoggedIn(true);
    };

    const logout = () => {
        setUserRole('normal');
        setIsAdminLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{ userRole, loginAsAdmin, logout, isAdminLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
