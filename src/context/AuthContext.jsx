// context/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            // Fetch user data with token
            setUser({ email: 'user@example.com' }); // Replace with actual user data
        }
    }, []);

    const login = async (email, password) => {
        // Perform login logic
        localStorage.setItem('token', 'fake-jwt-token'); // Replace with actual token
        setUser({ email });
    };

    const register = async (email, password) => {
        // Perform registration logic
        localStorage.setItem('token', 'fake-jwt-token'); // Replace with actual token
        setUser({ email });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};