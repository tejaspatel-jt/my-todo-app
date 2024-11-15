import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import Login from '../Login';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
 return isAuthenticated ? children : <Navigate to="/login" />;
  //return isAuthenticated ? children : <Route path="/login" element={Login}/>;
};

export default ProtectedRoute;
