import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet ,useLocation} from 'react-router-dom';

const RestrictedRoute = () => {
  const currentUser=useSelector(state=>state.auth.currentUser);
  const location=useLocation();
    return (
    currentUser._id ? (<Navigate to={// location.state!==null? location?.state?.from?.pathName :
        "/homePage"} replace state={{from:location}}/>
    ):(<Outlet/>)
  )
}

export default RestrictedRoute
