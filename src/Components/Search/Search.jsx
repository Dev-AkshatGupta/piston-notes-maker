import React from 'react'
import "./search.css";
const Search = () => {
  return (
    <header className="search-wrapper_head">
      <div className="search-wrapper">
        <input
          type="text"
          className="nav-bottom-search"
          placeholder=" search"
        />
      </div>
    </header>
  );
}

export {Search}
