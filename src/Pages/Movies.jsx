import React from "react";
import Footer from "../components/Footer";
import MovieRow from "../components/MovieRow";
import Nav from "../components/Nav";
import requests from "../requests";
import "./Movies.css";

const Movies = () => {
  return (
    <div className="movies__page">
      <Nav />
      <div className="movies_rows">
        {/* <h1>Movies</h1> */}
        <MovieRow fetchUrl={requests.fetchTrending} title="Trending Movies" />
        <MovieRow
          fetchUrl={requests.fetchUpcomingMovies}
          title="Upcoming Movies"
        />
        <MovieRow fetchUrl={requests.fetchActionMovies} title="Action Movies" />
        <MovieRow fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
        <MovieRow fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
        <MovieRow
          fetchUrl={requests.fetchRomanceMovies}
          title="Romance Movies"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Movies;
