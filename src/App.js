import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AllRoutes } from "AllRoutes";
import { checkToken } from "Redux/Reducers-Redux/authSlice";
import AddNoteModal from "Components/AddNoteModal/AddNoteModal";
import TextEditor from "Components/TextEditor/TextEditor";
import {
  postNote,
  displayModal,
  getAllNotes,
  getAllArchives,
  getAllTrash,
} from "Redux/Reducers-Redux/notesSlice";
import { TagInput } from "Components/TagInput/TagInput";
import EditNoteModal from "Components/EditNoteModal/EditNoteModal";
function App() {
  const dispatch = useDispatch();
  const modalDisplay = useSelector((state) => state?.notes?.modalDisplay);
  const editModalDisplay = useSelector((state) => state?.notes?.editModalDisplay);
  const [content, setContent] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteTags, setNoteTags] = useState([]);
  const [color, setColor] = useState({});
  useEffect(() => {
    dispatch(checkToken());
    dispatch(getAllNotes());
    dispatch(getAllArchives());
    dispatch(getAllTrash());
  }, []);
  const location = useLocation();
  return (
    <div className="App">
      <AllRoutes />
      <ToastContainer />
      {modalDisplay && (
        <AddNoteModal
          setColor={setColor}
          textArea={<TextEditor content={content} setContent={setContent} />}
          noteTitle={noteTitle}
          setNoteTitle={setNoteTitle}
          titleArea={
            <textarea
              role="textbox"
              type="text"
              name="title"
              className="postInput__content-input"
              placeholder="Add notes title"
              rows="1"
              onChange={(e) => {
                setNoteTitle(e.target.value);
              }}
              value={noteTitle}
            ></textarea>
          }
          tagInput={<TagInput arr={noteTags} setArr={setNoteTags} />}
        >
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
              dispatch(
                postNote({
                  title: noteTitle,
                  content: content,
                  tags: noteTags,
                  color,
                })
              );
              setContent("");
              setNoteTitle("");
              dispatch(displayModal());
            }}
          >
            Add note
          </button>
        </AddNoteModal>
      )}
      {editModalDisplay && <EditNoteModal/>}
    </div>
  );
}

export default App;
