import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import "./SearchPage.css";
import Footer from "../components/Footer";
import SearchPageLeft from "../components/SearchPageLeft";
import SearchPageRightMovies from "../components/SearchPageRightMovies";
import SearchPageRightTVShows from "../components/SearchPageRightTVShows";
import { useSelector } from "react-redux";
import { onSelectMovie } from "../features/SearchPageSelector";

const SearchPage = () => {
  const params = useParams();
  const movieSelected = useSelector(onSelectMovie);

  return (
    <div className="searchPage">
      <Nav />
      <h1>Search Results for '{params.searchId}'</h1>
      <div className="searchPage__movies">
        <SearchPageLeft />
        {movieSelected ? (
          <SearchPageRightMovies params={params} />
        ) : (
          <SearchPageRightTVShows params={params} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
