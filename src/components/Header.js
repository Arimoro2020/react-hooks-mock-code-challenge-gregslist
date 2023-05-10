import React from "react";
import Search from "./Search";

function Header({isSearched, handleOnChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search isSearched={isSearched} handleOnChange={handleOnChange}/>
    </header>
  );
}

export default Header;
