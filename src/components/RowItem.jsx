import React from "react";
import "./RowItem.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RowItem = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };

  const getImage = () => {
    if (!movie.poster_path)
      return "https://strykerslev.com/wp-content/uploads/2021/05/noPhoto.png";
    return `${baseUrl}${movie.poster_path}`;
  };

  return (
    <div className="rowitem">
      <LazyLoadImage
        src={getImage()}
        effect="opacity"
        height="220px"
        style={{ borderRadius: "10px" }}
      />
      <p className="rowitem__rating">
        {ratingToPercentage(movie.vote_average.toFixed())}
      </p>
      <p className="rowitem__title">
        {movie?.original_name || movie?.name || movie?.title}
      </p>
      <h6>{movie.release_date || movie.first_air_date}</h6>
    </div>
  );
};

export default RowItem;
