import React from "react";
import DOMPurify from "dompurify";
import { useDispatch } from "react-redux";

import {Chips } from "Components/Chips/Chips"

const Note = ({ noteObj,children }) => {
  const dispatch = useDispatch();
  const { _id: notesId } = noteObj;

  

  return (
    <div
      className={`flex w-full items-center flex justify-center items-center py-12 px-6 `}
    >
      <div>
        <div
          className={` h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 mb-6 py-5 px-4 ${noteObj.color.bg_color} `}
        >
          <div>
            <h4
              className={`focus:outline-none text-gray-800 dark:text-gray-100 font-bold mb-3 `}
            >
              {noteObj.title}
            </h4>
            <div
              className={`focus:outline-none text-gray-800 dark:text-gray-100 text-sm ${noteObj.color.color} break-normal`}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(noteObj?.content),
              }}
            ></div>
            <div className={`pt-4 flex flex-wrap`}>
              {noteObj?.tags?.map(chip=><Chips text={chip}/>)}
            </div>
          </div>
          <div>
            {children}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export { Note };
