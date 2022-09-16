import React from "react";
import "./RowItem.css";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RowItem = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const ratingToPercentage = (n) => {
    return (n * 10).toFixed() + "%";
  };

  const imagePath = !movie.poster_path
    ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxJNoiNZOGpeAZDBbBa_6Knn1y4ItrZDkzvpI6uUfV2WQP1bDYnMpvz1Df9GL1CxnHFkc&usqp=CAU"
    : `${baseUrl}${movie.poster_path}`;

  return (
    <div className="rowitem">
      {/* <img
        className="rowItem__img"
        src={movie.poster_path ? `${baseUrl}${movie.poster_path}` : "Loading"}
        alt=""
        loading="lazy"
      /> */}
      <LazyLoadImage
        src={imagePath}
        effect="opacity"
        height="220px"
        style={{ borderRadius: "10px" }}
      />
      <p className="rowitem__rating">
        {ratingToPercentage(movie.vote_average)}
      </p>
      <p className="rowitem__title">
        {movie?.original_name || movie?.name || movie?.title}
      </p>
      <h6>{movie.release_date || movie.first_air_date}</h6>
    </div>
  );
};

export default RowItem;
