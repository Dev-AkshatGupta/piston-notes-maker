import AuthenticationPage from "Pages/AuthenticationPage/AuthenticationPage";
import {Routes,Route} from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <AuthenticationPage />
      <ToastContainer />
    </div>
  );
}

export default App;
