import React from "react";
import "./LoginScreen.css";
import Button from "@mui/material/Button";
import AnimationIcon from "@mui/icons-material/Animation";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      login({
        user: true,
      })
    );
  };

  return (
    <div className="loginScreen">
      <h1 className="loginScreen__logo">
        <AnimationIcon className="loginScreen__logo__logo" />
        <span>Movie</span>Talk
      </h1>
      <div className="loginScreen__contents">
        <h1>Welcome.</h1>
        <h2>
          Millions of movies, TV shows and people to discover. Explore now.
        </h2>
        <Button variant="contained" onClick={handleClick}>
          Lets Get Started!
        </Button>
      </div>
    </div>
  );
};

export default LoginScreen;
