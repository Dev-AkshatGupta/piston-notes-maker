import React from 'react'
import { LeftAside,RightAside } from 'Components';
const HomePage = () => {
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
       

        <div className="empty"></div>
       
     
        
      </div>
      <RightAside />
    </div>
  );
}

export{ HomePage}
