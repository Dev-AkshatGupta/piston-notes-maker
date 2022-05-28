import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "AllRoutes";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import AddNoteModal from "Components/AddNoteModal/AddNoteModal";
import TextEditor from "Components/TextEditor/TextEditor";
import { postNote } from "Redux/Reducers-Redux/notesSlice";
function App() {
  const dispatch = useDispatch();
  const modalDisplay = useSelector((state) => state?.notes?.modalDisplay);
  const [content, setContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  // const [noteTitle,setNoteTitle]=useState("");
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
          titleArea={
            <textarea
              role="textbox"
              type="text"
              name="post"
              className="postInput__content-input"
              placeholder="Write something in this"
              rows="3"
              onChange={(e) => {
                setNoteTitle(e.target.value);
              }}
              value={noteTitle}
            ></textarea>
          }
        >
          {" "}
          <button
            className="
                  block
                  text-center
                  w-full
                  p-3
                  text-base
                  font-medium
                  rounded-lg
                  text-dark
                  border border-[#E9EDF9]
                  hover:text-white hover:border-red-600
                  transition
                  btn
                  "
            onClick={() => {
              dispatch(postNote({ title: noteTitle, content: content }));
              setContent("");
              setNoteTitle("");
            }}
          >
            Add note
          </button>
        </AddNoteModal>
      )}
    </div>
  );
}

export default App;
