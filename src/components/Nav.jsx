import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useLocation, useNavigate } from "react-router-dom";
import AnimationIcon from "@mui/icons-material/Animation";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [url, setUrl] = useState(null);

  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      document.getElementById("nav").style.top = "-60px";
    } else {
      document.getElementById("nav").style.top = "0px";
    }
  };

  //runs once when component is mounted
  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar); //attach an EventListener which runs transitionNavbar every time user scrolls
    return () => window.removeEventListener("scroll", transitionNavbar); //return function is run when component unmounts, cleaning up the EventListener
  }, []);
  return (
    <div className="nav" id="nav">
      <div className="nav__left">
        <h1 onClick={() => navigate("/")} className="nav__logo">
          <AnimationIcon className="nav__logo__logo" />
          <span>Movie</span>Talk
        </h1>
        <p
          className={`nav__links ${url === "/movies" ? "active" : ""}`}
          onClick={() => navigate("/movies")}
        >
          MOVIES
        </p>
        <p
          className={`nav__links ${url === "/tvshows" ? "active" : ""}`}
          onClick={() => navigate("/tvshows")}
        >
          TV SHOWS
        </p>
      </div>
    </div>
  );
};

export default Nav;
