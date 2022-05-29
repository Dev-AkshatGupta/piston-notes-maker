import React from "react";
import { useDispatch } from "react-redux";
import { displayModal } from "Redux/Reducers-Redux/notesSlice";
import {BsPalette} from "react-icons/bs"
const AddNoteModal = ({ children, textArea, titleArea, tagInput }) => {
  const dispatch = useDispatch();
  return (
    <section>
      <div
        className="
      bg-black bg-opacity-90
      fixed
      top-0
      left-0
      w-full
      min-h-screen
      h-full
      flex
      items-center
      justify-center
      px-4
      py-5
      z-10
      "
      >
        <div
          className="
         w-full
         max-w-[570px]
         rounded-[20px]
         bg-white
         py-12
         px-8
         md:py-[60px] md:px-[70px]
         text-center
         "
        >
          <h3 className="font-bold text-dark text-xl sm:text-2xl pb-2">Note</h3>
          <div className="my-4">{titleArea}</div>
          <span className="inline-block bg-primary h-1 w-[90px] mx-auto rounded mb-6"></span>
          <div className="my-4">{textArea}</div>
          <div className="my-4">{tagInput}</div>
          <div className="w-1/2 px-3 py-3">{<BsPalette/>}</div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-1/2 px-3">
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
                  hover:bg-red-600 hover:text-white hover:border-red-600
                  transition
                  btn
                  "
                onClick={() => dispatch(displayModal())}
              >
                Cancel
              </button>
            </div>

            <div className="w-1/2 px-3">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddNoteModal;
