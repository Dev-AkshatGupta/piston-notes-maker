// import { current } from '@reduxjs/toolkit';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoutes = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const currentUser=useState(state=>state.store.auth.currentUser);
    return (
  currentUser._id?<Outlet/>:<Navigate to="/" state={{from :location}} replace/>
  )
}

export default PrivateRoutes
