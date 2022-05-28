import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "AllRoutes";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import { LeftAside,RightAside } from "Components";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkToken());
  }, []);
const location=useLocation();
  return (
    <div className="App">

      <AllRoutes />
      <ToastContainer />
    
    
    </div>
  );
}

export default App;
