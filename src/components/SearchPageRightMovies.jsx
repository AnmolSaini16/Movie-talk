import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import "./SearchPageRight.css";

const SearchPageRightMovies = ({ params }) => {
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);

  const API_KEY = "edccfc1e796824b9d5eee1575f81badc";
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`/search/movie?api_key=${API_KEY}&query=${params.searchId}`)
      .then((response) => {
        setMovies(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.searchId]);

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };

  const override = css`
    display: block;
    margin: auto auto;
    border-color: rgb(26, 208, 177);
  `;

  return (
    <div className="searchPageRightMovies">
      {movies.map((movie) => (
        <Link to={`/clickedmovieitem/${movie.id}`} key={movie.id}>
          <div className="searchPage__movies__row">
            <img
              className="searchPage__img"
              src={`${baseUrl}${movie?.poster_path}`}
              alt=""
            />
            <p className="searchPage__movies__title">
              {movie?.original_name || movie?.name || movie?.title}
            </p>
            <h6>Release Date: {movie.release_date || movie.first_air_date}</h6>
            <p className="searchpage__rating__rating">
              Rating: {ratingToPercentage(movie.vote_average)}
            </p>
          </div>
        </Link>
      ))}
      <ClipLoader
        loading={loading}
        css={override}
        size={120}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default SearchPageRightMovies;
