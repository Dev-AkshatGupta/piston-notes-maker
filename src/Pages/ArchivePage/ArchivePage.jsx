import React from "react";
import { LeftAside, Note, Search } from "Components";
import { useSelector } from "react-redux";
import { BsBox } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import {
  restoreNoteFromArchive,
  deleteFromArchive,
} from "Redux/Reducers-Redux/notesSlice";
const ArchivePage = () => {
  const archive = useSelector((state) => state.notes.archive);
  const dispatch = useDispatch();
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
        {/* todo */}
        {/* <Search /> */}{" "}
        {archive.map((noteObj) => (
          <Note noteObj={noteObj}>
            <div className="flex items-center justify-between text-gray-800 justify-between">
              <p className="focus:outline-none text-sm dark:text-gray-100">
                March 28, 2020
              </p>
              <div className="flex justify-evenly w-3/5">
                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button
                    onClick={() =>
                      dispatch(deleteFromArchive({ notesId: noteObj._id }))
                    }
                  >
                    <ImBin />
                  </button>
                </div>

                <div className="w-8 h-8 rounded-full bg-gray-500 text-white flex items-center justify-center">
                  <button
                    onClick={() => {
                      dispatch(
                        restoreNoteFromArchive({
                          notesId: noteObj._id,
                        })
                      );
                    }}
                  >
                    <BsBox />
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

export { ArchivePage };
