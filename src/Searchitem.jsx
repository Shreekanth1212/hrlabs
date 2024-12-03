import React from "react";

const Searchitem = ({ search, setsearch }) => {
  return (
    <form
      className="searchForm"
      onSubmit={(e) => e.preventDefault()} // Prevent form submission
    >
      <label htmlFor="search">Search</label>
      <input
        type="text"
        placeholder="search"
        id="search" 
        value={search} // Controlled input
        onChange={(e) => setsearch(e.target.value)} // Update search state
      />
    </form>
  );
};

export default Searchitem;
