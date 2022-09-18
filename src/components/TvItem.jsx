import React, { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import axios from "../axios";
import { RiArrowDownSLine } from "react-icons/ri";

import Nav from "./Nav";

const TVItem = () => {
  const params = useParams();
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const API_KEY = "edccfc1e796824b9d5eee1575f81badc";
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios
      .get(`tv/${params.tvId}?api_key=${API_KEY}&append_to_response=videos`)
      .then((response) => {
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.tvId]);

  useEffect(() => {
    axios
      .get(
        `tv/${params.movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((data) => {
        setReviews(data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.movieId]);

  const ratingToPercentage = (n) => {
    return n * 10 + "%";
  };

  const opts = {
    height: "180",
    width: "280",
    autoplay: 1,
  };

  const reduceDescription = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <div>
      <div
        className="movieItem"
        style={{
          backgroundSize: "cover",
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("${baseUrl}${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <Nav />
        <div className="movieItem__content">
          <div className="movieItem__leftContent">
            <img src={`${baseUrl}${movie?.poster_path}`} alt="" />
          </div>
          <div className="movieItem__rightContent">
            <h1>
              {movie?.original_name || movie?.name || movie?.title}{" "}
              {movie ? `(${movie.release_date})` : "--"}
            </h1>
            <h4 className="movieItem__rightContent__ratingGenre">
              <span>
                <h3 className="movieItem__rightContent__rating">
                  {movie
                    ? ratingToPercentage(movie?.vote_average?.toFixed())
                    : "00%"}
                </h3>
              </span>
              <p className="movieItem__rightContent__genre">
                {movie?.genres?.map((gen) => (
                  <span>{gen.name}</span>
                ))}
              </p>
            </h4>
            <p className="movieItem__rightContent__overview">Overview</p>
            <p>{movie.overview}</p>
            <YouTube
              className="movieItem__rightContent__player"
              videoId={movie?.videos?.results[0]?.key}
              opts={opts}
            />
          </div>
        </div>
        <div className="movie__reviews__button">
          Reviews
          <RiArrowDownSLine className="movie__reviews__button__icon" />
        </div>
      </div>

      {!reviews.length ? (
        <h1 className="no__reviews">No reviews posted till now 😔</h1>
      ) : (
        <div className="movie__reviews">
          {reviews.map((item) => (
            <div className="movie__reviews__row" key={item.id}>
              <div className="movie__reviews__row__left"></div>
              <div className="movie__reviews__row__right">
                <h1>
                  <span>
                    <img
                      className="movie__reviews__row__right__img"
                      src={item.author_details.avatar_path?.substr(1)}
                      alt=""
                    />
                  </span>
                  A review by{" "}
                  {item.author_details.name || item.author_details.username}
                  <span className="movie__reviews__row__right__ratingtitle">
                    {item.author_details?.rating
                      ? `★ ${item.author_details.rating}`
                      : "Not rated by user"}
                  </span>
                </h1>
                <p className="movie__reviews__row__right__writtenBy">
                  Written by {item.author_details.username} on{" "}
                  {item.created_at.slice(0, -14)}
                </p>
                <p className="movie__reviews__row__right__content">
                  {reduceDescription(item.content, 580)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(TVItem);
