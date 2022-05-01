import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useLocation, useNavigate } from "react-router-dom";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AnimationIcon from "@mui/icons-material/Animation";
import { auth } from "../Firebase";
import { selectuser } from "../features/userSlice";
import { useSelector } from "react-redux";

const Nav = () => {
  const navigate = useNavigate();
  const selector = useSelector(selectuser);
  const location = useLocation();

  const [url, setUrl] = useState(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
          Movies
        </p>
        <p
          className={`nav__links ${url === "/tvshows" ? "active" : ""}`}
          onClick={() => navigate("/tvshows")}
        >
          TV Shows
        </p>
      </div>
      <div className="nav__right">
        <img
          className="nav__profileLogo"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          src={selector.profilePic}
          alt="Profile"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem>Hi {selector.name}!</MenuItem>
          <MenuItem onClick={() => auth.signOut()}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
