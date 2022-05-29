import React from "react";
import { Cancel } from "Assets/Icons/Cancel";
const Chips = ({ text, children }) => {
  return (
    <span className="px-4 py-2 rounded-full text-gray-500 bg-gray-200 font-semibold text-sm flex align-center w-max cursor-pointer active:bg-gray-300 transition duration-300 ease">
      {text}
      {children}
    </span>
  );
};

export { Chips };
