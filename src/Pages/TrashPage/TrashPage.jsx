import React from "react";
import { LeftAside, RightAside, Note, Search } from "Components";
import { useSelector } from "react-redux";
import { BsBox } from "react-icons/bs";
import { MdOutlineRestorePage } from "react-icons/md";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import {

 deleteNoteFromTrash,
  restoreNoteFromTrash,
} from "Redux/Reducers-Redux/notesSlice";

const TrashPage = () => {
  const trash= useSelector((state) => state.notes.trash);
  const dispatch = useDispatch();
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
        <Search />
        {trash.map((noteObj) => (
          <Note noteObj={noteObj}>
            <div className="flex items-center justify-between text-gray-800 justify-between">
              <p className="focus:outline-none text-sm dark:text-gray-100">
                March 28, 2020
              </p>
              <div className="flex justify-evenly w-3/5">
                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button
                    onClick={() =>
                      dispatch(deleteNoteFromTrash({ notesId: noteObj._id }))
                    }
                  >
                    <ImBin />
                  </button>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button
                    onClick={() => {
                      dispatch(
                        restoreNoteFromTrash({
                          notesId: noteObj._id,
                        })
                      );
                    }}
                  >
                    <MdOutlineRestorePage />
                  </button>
                </div>
              </div>
            </div>
          </Note>
        ))}
      </div>
      <RightAside />
    </div>
  );
};

export { TrashPage };
