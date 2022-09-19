import React from "react";
import "./RowItem.css";
import { LazyImage } from "./LazyImage";

const RowItem = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };
  return (
    <div className="rowitem">
      <LazyImage isRowItemImg={true} src={`${baseUrl}${movie.poster_path}`} />
      <p className="rowitem__rating">
        {ratingToPercentage(movie?.vote_average?.toFixed())}
      </p>
      <p className="rowitem__title">
        {movie?.original_name || movie?.name || movie?.title}
      </p>
      <h6>{movie.release_date || movie.first_air_date}</h6>
    </div>
  );
};

export default RowItem;
