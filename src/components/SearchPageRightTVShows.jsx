import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";

import "./SearchPageRight.css";

const SearchPageRightTVShows = ({ params }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imgLoading, setImageLoading] = useState(true);
  const placeholderImage =
    "https://cdn.shopify.com/s/files/1/0588/5306/4899/t/14/assets/product-placeholder.jpg?v=65808927917748496431643306019";

  const API_KEY = "edccfc1e796824b9d5eee1575f81badc";
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`/search/tv?api_key=${API_KEY}&query=${params.searchId}`)
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

  return (
    <div className="searchPageRightMovies">
      {movies.length === 0 && loading === false ? (
        <h2>No results found 😔</h2>
      ) : (
        movies.map((movie) => (
          <Link to={`/clickedTvitem/${movie.id}`} key={movie.id}>
            <div className="searchPage__movies__row">
              {imgLoading ? (
                <img
                  src={placeholderImage}
                  className="searchPage__img"
                  loading="lazy"
                />
              ) : null}
              <img
                className="searchPage__img"
                src={
                  movie.poster_path
                    ? `${baseUrl}${movie?.poster_path}`
                    : placeholderImage
                }
                onLoad={() => setImageLoading(false)}
                style={imgLoading ? { visibility: "hidden" } : {}}
                loading="lazy"
              />
              <p className="searchPage__movies__title">
                {movie?.original_name || movie?.name || movie?.title}
              </p>
              <h6>
                Release Date: {movie.release_date || movie.first_air_date}
              </h6>
              <p className="searchpage__rating__rating">
                Rating: {ratingToPercentage(movie.vote_average)}
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default SearchPageRightTVShows;
