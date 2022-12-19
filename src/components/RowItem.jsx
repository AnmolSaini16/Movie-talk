import React from "react";
import "./RowItem.css";

const RowItem = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };
  return (
    <div className="rowitem">
      <img className="rowItem__img" src={`${baseUrl}${movie.poster_path}`} />
      <p className="rowitem__rating">
        {ratingToPercentage(movie?.vote_average.toFixed(1))}
      </p>
      <p className="rowitem__title">
        {movie?.original_name || movie?.name || movie?.title}
      </p>
      <h6>{movie.release_date || movie.first_air_date}</h6>
    </div>
  );
};

export default RowItem;
