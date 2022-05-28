import React from 'react'
import { LeftAside,RightAside,Note ,Search} from 'Components';

const HomePage = () => {
  return (
    <div className="layout">
      <div className="layout__left-sidebar">
        <LeftAside />
      </div>
      <div className="layout__main relative">
        <Search/>
        <Note/>
      </div>
      <RightAside />
    </div>
  );
}

export{ HomePage}
