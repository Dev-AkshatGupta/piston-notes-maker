import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "AllRoutes";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import AddNoteModal from "Components/AddNoteModal/AddNoteModal";
import TextEditor from "Components/TextEditor/TextEditor";
function App() {
  const dispatch = useDispatch();
  const modalDisplay = useSelector((state) => state?.notes?.modalDisplay);
  const [content, setContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  useEffect(() => {
    dispatch(checkToken());
  }, []);
  const location = useLocation();
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer />
      {modalDisplay && (
        <AddNoteModal
          textArea={<TextEditor content={content} setContent={setContent} />}
          noteTitle={noteTitle}
          setNoteTitle={setNoteTitle}
        />
      )}
    </div>
  );
}

export default App;
