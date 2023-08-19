import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  return (
    <input
      type="text"
      placeholder="Search notes..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
      }}
    />
  );
}

export default SearchBar;
