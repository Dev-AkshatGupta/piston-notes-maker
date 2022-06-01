import React, { useState } from "react";
import { Chips } from "Components/Chips/Chips";
import { Cancel } from "Assets/Icons/Cancel";
import { BsTag } from "react-icons/bs";
const TagInput = ({ arr, setArr }) => {
  const [tag, setTag] = useState("");
  return (
    <div>
      <div className="flex align-center flex-wrap gap-x-1 gap-y-0.5">
        {arr.map((chip, index) => (
          <Chips text={chip}>
            <button
              className="bg-transparent hover focus:outline-none"
              onClick={() => {
                setArr((arr) => arr.filter((item) => item !== chip));
              }}
            >
              <Cancel />
            </button>
          </Chips>
        ))}
      </div>
      <textarea
        role="textbox"
        type="text"
        name="title"
        className=" border border-solid rounded-md border-slate-600 w-full resize-none overflow-x-hidden mt-2 focus:outline-none"
        placeholder="Add tags"
        rows="1"
        onChange={(e) => {
          setTag(e.target.value);
        }}
        value={tag}
      ></textarea>
      <button
        className=" block
                  text-center
                  w-full
                  p-3
                  text-base
                  font-medium
                  rounded-lg
                  text-dark
                  border border-[#E9EDF9]
                  transition
                  btn w-1/4 "
        onClick={() => {
          setArr((arr) => [...arr, tag]);
          setTag("");
        }}
      >
        Add Tag
      </button>
    </div>
  );
};

export { TagInput };
