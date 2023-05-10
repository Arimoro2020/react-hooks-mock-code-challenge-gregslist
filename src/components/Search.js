import React from "react";

function Search({isSearched, handleOnChange}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={(e)=>handleSubmit(e)}>
      <input
        type="text"
        id="search"
        name="search"
        placeholder="search free stuff"
        value={isSearched}
        onChange={(e) =>handleOnChange(e)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
