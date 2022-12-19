import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import { useQuery } from "react-query";
import RowItem from "./RowItem";
import MovieRowSkeleton from "./skeleton";

const TVRow = ({ fetchUrl, title }) => {
  const getTvShows = () => {
    return axios.get(fetchUrl);
  };

  const { data, isLoading } = useQuery(["TvItems", fetchUrl], getTvShows, {
    refetchOnWindowFocus: false,
  });
  const TvItems = data?.data?.results;

  return (
    <>
      {isLoading ? (
        <MovieRowSkeleton />
      ) : (
        <div className="row">
          <h2>{title}</h2>
          <div className="row__movies">
            {TvItems.map((movie) => (
              <Link to={`/clickedTVitem/${movie.id}`} key={movie.id}>
                <RowItem movie={movie} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TVRow;
