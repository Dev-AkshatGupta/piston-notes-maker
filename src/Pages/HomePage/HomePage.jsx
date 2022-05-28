import React from 'react'
import { LeftAside,RightAside } from 'Components';
import TextEditor from 'Components/TextEditor/TextEditor';
const HomePage = () => {
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
       <TextEditor/>
       
     
        
      </div>
      <RightAside />
    </div>
  );
}

export{ HomePage}
