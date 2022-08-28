import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import "./MovieRow.css";
import RowItem from "./RowItem";

const MovieRow = ({ fetchUrl, title }) => {
  const fetchMovies = (fetchUrl) => {
    return axios.get(fetchUrl);
  };

  const { data, isLoading } = useQuery(
    ["movies", fetchUrl],
    async () => await fetchMovies(fetchUrl),
    {
      staleTime: Infinity,
    }
  );
  const movies = data?.data?.results;

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: rgb(26, 208, 177);
  `;

  return (
    <>
      {isLoading ? (
        <ClipLoader
          loading={isLoading}
          css={override}
          size={80}
          speedMultiplier={1.5}
        />
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

export default memo(MovieRow);
