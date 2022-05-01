import React from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import requests from "../requests";
import "./TVshows.css";
import TVRow from "../components/TVrow";

const TVshows = () => {
  return (
    <div className="tvshows">
      <Nav />
      <div className="tvshows__rows">
        {/* <h1>TV Shows</h1> */}
        <TVRow fetchUrl={requests.fetchPopularTVshows} title="Popular" />
        <TVRow fetchUrl={requests.fetchComedyShows} title="Comedy Shows" />
        <TVRow fetchUrl={requests.fetchRomaceshows} title="Romance Shows" />
        <TVRow fetchUrl={requests.fetchOntheAirShows} title="On Air" />
      </div>
      <Footer />
    </div>
  );
};

export default TVshows;
