import React, { useState } from "react";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [searchPage, setSearchPage] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    setSearchPage(true);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handelSubmit}>
        <input
          placeholder="Search for a movie, TV show..."
          type="text"
          onChange={(e) => setSearchText(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      {searchPage && searchText ? navigate(`/search/${searchText}`) : null}
    </div>
  );
};

export default SearchBar;
