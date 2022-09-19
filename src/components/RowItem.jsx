import React, { useState } from "react";
import "./RowItem.css";

const RowItem = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [imgLoading, setImageLoading] = useState(true);

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };

  return (
    <div className="rowitem">
      {imgLoading ? (
        <img src="placeholder.webp" className="rowItem__img" loading="lazy" />
      ) : null}
      <img
        src={`${baseUrl}${movie.poster_path}`}
        style={imgLoading ? { visibility: "hidden" } : {}}
        className="rowItem__img"
        onLoad={() => setImageLoading(false)}
        loading="lazy"
      />
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
