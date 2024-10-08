// AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate,useLocation  } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import EndPoint from '../Endpoint';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        checkAuth(); // Check authentication status on initial load
    }, []);


    const checkAuth = async () => {
        try {
            const response = await EndPoint.Api.getRequest(EndPoint.Api.ApiPaths.account.auth, {
                withCredentials: true
            });

            if (response.status === 200) {
                setIsAuth(true);
            }
            else{
                setIsAuth(false);
                navigate(EndPoint.path.SignIn);
            }
        } catch (error) {
            console.log(error);
            setIsAuth(false); 
            navigate(EndPoint.path.SignIn);
        } finally {
            setLoading(false);
        }
    };

    const alertMessage = (message, success = false) => {
        Swal.fire({
            title: message,
            icon: `${success ? "success": "error"}`,
            confirmButtonText: 'Okay'
        });
    };

    const login = async (credentials) => {
        try {
            const response = await EndPoint.Api.postRequest(EndPoint.Api.ApiPaths.account.login, credentials, {withCredentials: true});
            if (response.status === 200) {
                setIsAuth(true);
                navigate(EndPoint.path.Profile);
            }
        } catch (error) {
            alertMessage(error);
        }
    };

    const logout = () => {
        EndPoint.Api.postRequest(EndPoint.Api.ApiPaths.account.logout, {}, { withCredentials: true })
            .then(() => {
                setIsAuth(false);
                navigate(EndPoint.path.SignIn);
            })
            .catch(error => {
                console.error("Logout failed:", error);
            });
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout, alertMessage, loading, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
