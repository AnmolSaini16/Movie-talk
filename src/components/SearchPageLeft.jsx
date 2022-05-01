import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  onSelectMovie,
  selectedMovie,
  selectedTVShow,
} from "../features/SearchPageSelector";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import LiveTvIcon from "@mui/icons-material/LiveTv";

import "./SearchPageLeft.css";

const SearchPageLeft = () => {
  const dispatch = useDispatch();
  const selector = useSelector(onSelectMovie);

  const handleTVShowClick = () => {
    dispatch(selectedTVShow(true));
    dispatch(selectedMovie(false));
  };

  const handleMovieClick = () => {
    dispatch(selectedMovie(true));
    dispatch(selectedTVShow(false));
  };

  return (
    <div className="searchPageLeft">
      <h1>Search Results</h1>
      <h2
        onClick={handleMovieClick}
        className={`searchPageLeft__heading ${selector ? "activeHeading" : ""}`}
      >
        <LocalMoviesIcon className="searchPageLeft__icon" /> Movies
      </h2>
      <h2
        onClick={handleTVShowClick}
        className={`searchPageLeft__heading ${
          !selector ? "activeHeading" : ""
        }`}
      >
        <LiveTvIcon className="searchPageLeft__icon" /> TV Shows
      </h2>
    </div>
  );
};

export default SearchPageLeft;
