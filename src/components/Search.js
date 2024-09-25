import React from "react";

function Search({updateSearchText, searchText}) {

  function handleSearchChange(event) {
    updateSearchText(event.target.value);
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={searchText}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;
