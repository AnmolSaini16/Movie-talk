import React, { memo, useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";

import "./Banner.css";
import SearchBar from "./SearchBar";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getMovie() {
      const response = await axios.get(requests.fetchPopularMovies);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
      return response;
    }

    getMovie();
  }, []);

  const reduceDescription = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `radial-gradient(rgb(1,106,143, 0.4), rgb(3,47,76)), url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1>
          {movie?.original_name || movie?.name || movie?.title}{" "}
          <span className="rating">({movie?.vote_average}★)</span>
        </h1>
        <h3>{reduceDescription(movie.overview, 150)}</h3>
      </div>
      <div className="banner__searchBar">
        <SearchBar />
      </div>
    </div>
  );
};

export default memo(Banner);
