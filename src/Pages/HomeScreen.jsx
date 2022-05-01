import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

import "./HomeScreen.css";
import requests from "../requests";
import MovieRow from "../components/MovieRow";
import TVRow from "../components/TVrow";

const HomeScreen = () => {
  return (
    <div>
      {/* Navbar */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Rows */}
      <div className="homeScreen__rows">
        <h1>Movies</h1>
        <MovieRow
          fetchUrl={requests.fetchPopularMovies}
          title="Popular Movies"
        />
        <MovieRow
          fetchUrl={requests.fetchTopRatedMovies}
          title="Top Rated Movies"
        />
        <MovieRow
          fetchUrl={requests.fetchPopularMoviesinIndia}
          title="Popular Movies in India"
        />
        <MovieRow
          fetchUrl={requests.fetchTopRatedMoviesinIndia}
          title="Top Rated Movies in India"
        />
        <h1>TV Shows</h1>
        <TVRow fetchUrl={requests.fetchPopularTVshows} title="Popular on TV" />
        <TVRow
          fetchUrl={requests.fetchTopRatedTVshows}
          title="Top Rated TV shows"
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
