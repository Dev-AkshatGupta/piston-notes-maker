import AuthenticationPage from "Pages/AuthenticationPage/AuthenticationPage";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ToastContainer } from "react-toastify";
import AllRoutes from "AllRoutes";
function App() {
  
  const currentUser=useSelector(state=>state.auth.currentUser);

  return (
    <div className="App">
      <AllRoutes/>
      <AuthenticationPage />
      <ToastContainer />
    </div>
  );
}

export default App;
