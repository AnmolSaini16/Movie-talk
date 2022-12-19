import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import { useQuery } from "react-query";
import "./MovieRow.css";
import RowItem from "./RowItem";
import MovieRowSkeleton from "./skeleton";

const MovieRow = ({ fetchUrl, title }) => {
  const fetchMovies = (fetchUrl) => {
    return axios.get(fetchUrl);
  };

  const { data, isLoading } = useQuery(
    ["movies", fetchUrl],
    async () => await fetchMovies(fetchUrl),
    {
      refetchOnWindowFocus: false,
    }
  );
  const movies = data?.data?.results;

  return (
    <>
      {isLoading ? (
        <MovieRowSkeleton />
      ) : (
        <div className="row">
          <h2>{title}</h2>
          <div className="row__movies">
            {movies.map((movie) => (
              <Link to={`/clickedmovieitem/${movie.id}`} key={movie.id}>
                <RowItem movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieRow;
