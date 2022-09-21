import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";
import { useQuery } from "react-query";
import RowItem from "./RowItem";

const TVRow = ({ fetchUrl, title }) => {
  const getTvShows = () => {
    return axios.get(fetchUrl);
  };

  const { data, isLoading } = useQuery(["TvItems", fetchUrl], getTvShows, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
  const TvItems = data?.data?.results;

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
