import {AuthenticationPage} from "Pages";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {AllRoutes}from "AllRoutes";

function App() {
  
  const currentUser=useSelector(state=>state.auth.currentUser);
  const location=useLocation();

  return (
    <div className="App">
{/* {location.pathName!=="/" && } */}
      <AllRoutes/>
      <AuthenticationPage/>
      <ToastContainer />
    </div>
  );
}

export default App;
