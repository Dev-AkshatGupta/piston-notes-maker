import React from "react";
import { LeftAside, Note, Search } from "Components";
import { useSelector } from "react-redux";
import { AiOutlinePushpin } from "react-icons/ai";
import { FiInbox } from "react-icons/fi";
import { ImBin, ImCross } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  deleteNote,
  postNoteToArchive,
  postNoteToTrash,
  displayEditModal,
  getNoteToEdit,
} from "Redux/Reducers-Redux/notesSlice";
const HomePage = () => {
  const notesArr = useSelector((state) => state.notes.allNotes);
  const dispatch = useDispatch();
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
        <Search />
        {notesArr.map((noteObj) => (
          <Note noteObj={noteObj}>
            <div className="flex items-center justify-between text-gray-800 justify-between">
              <p className="focus:outline-none text-sm dark:text-gray-100">
                March 28, 2020
              </p>
              <div className="flex justify-evenly w-3/5">
                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button onClick={()=>{
                    dispatch(displayEditModal());
                    dispatch(getNoteToEdit(noteObj));
                  }}>
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/single_card_with_title_and_description-svg1.svg"
                      alt="icon"
                    />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button>
                    <AiOutlinePushpin />
                  </button>
                </div>
                <div
                  className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center"
                  onClick={() => dispatch(deleteNote({ notesId: noteObj._id }))}
                >
                  <button>
                    <ImBin />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button
                    onClick={() =>
                      dispatch(
                        postNoteToTrash({ notesId: noteObj._id, note: noteObj })
                      )
                    }
                  >
                    <ImCross />
                  </button>
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button
                    onClick={() => {
                      dispatch(
                        postNoteToArchive({
                          notesId: noteObj._id,
                          note: noteObj,
                        })
                      );
                    }}
                  >
                    <FiInbox />
                  </button>
                </div>
              </div>
            </div>
          </Note>
        ))}
      </div>
    </div>
  );
};

export { HomePage };
