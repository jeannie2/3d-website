import React from "react"

const SearchBar = ({keyword, onChange}) => {
  return (
    <input
    id="search"
    value={keyword}
    placeholder={"search products"}
    onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default SearchBar;
