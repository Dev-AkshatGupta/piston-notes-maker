import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";

const TextEditor = () => {
  const config = {
    removeButtons: ["source"],
    readonly: false, // all options from https://xdsoft.net/jodit/doc/
  };
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <JoditEditor
      ref={editor}
      value={content}
      config={config}
      tabIndex={1}
      onBlur={(newContent) => setContent(newContent)}
      // preferred to use only this option to update the content for performance reasons
      //   onChange={(newContent) => {setContent(newX)}}
    />
  );
};

export default TextEditor;
