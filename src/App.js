import AuthenticationPage from "Pages/AuthenticationPage/AuthenticationPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const currentUser=useSelector(state=>state.auth.currentUser);
  useEffect(()=>{
    
  },[ currentUser]);
  return (
    <div className="App">
      <AuthenticationPage />
      <ToastContainer />
    </div>
  );
}

export default App;
