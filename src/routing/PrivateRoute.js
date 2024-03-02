import React, { useEffect } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { initAxios } from '../helper-functions/initAxios';

const PrivateRoute = () => {
  const {isAuthenticated} = useSelector(state=>state.auth)
  useEffect(() => {
    initAxios()
  }, [isAuthenticated])
  
  return (
    isAuthenticated ? (
      <Outlet />
    ) : (
      <Navigate to="/login" />
    )
  );
};

export default PrivateRoute;
