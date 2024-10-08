// src/components/PrivateRoute.js
import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { isAuth, loading, checkAuth } = useAuth();
    
  useEffect(() => {
     checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...ssssssssssssssssssssssssss</div>;
  }

  return isAuth ? children : <Navigate to="/" />; 
};

export default PrivateRoute;
