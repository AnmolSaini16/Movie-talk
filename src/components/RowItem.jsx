import React from "react";
import "./RowItem.css";
import LazyLoad from "react-lazyload";

const RowItem = ({ movie }) => {
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };

  const getImage = () => {
    if (movie.poster_path) return `${baseUrl}${movie.poster_path}`;
    return "https://cdn.shopify.com/s/files/1/0588/5306/4899/t/14/assets/product-placeholder.jpg?v=65808927917748496431643306019";
  };

  return (
    <div className="rowitem">
      <LazyLoad height={250}>
        <img src={getImage()} className="rowItem__img" />
      </LazyLoad>
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
