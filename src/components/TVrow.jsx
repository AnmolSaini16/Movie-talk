import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

import RowItem from "./RowItem";

const TVRow = ({ fetchUrl, title }) => {
  const [movies, setMovies] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovies() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      setLoading(false);
      return request;
    }
    getMovies();
  }, [fetchUrl]);

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: rgb(26, 208, 177);
  `;

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__movies">
        {movies.map((movie) => (
          <Link to={`/clickedTVitem/${movie.id}`} key={movie.id}>
            <RowItem movie={movie} />
          </Link>
        ))}
      </div>
      <ClipLoader
        loading={loading}
        css={override}
        size={80}
        speedMultiplier={1.5}
      />
    </div>
  );
};

export default memo(TVRow);
