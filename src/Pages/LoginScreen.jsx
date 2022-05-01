import React from "react";
import "./LoginScreen.css";
import Button from "@mui/material/Button";
import { signInWithGoogle } from "../Firebase";
import AnimationIcon from "@mui/icons-material/Animation";

const LoginScreen = () => {
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
        <Button variant="contained" onClick={signInWithGoogle}>
          Lets Get Started!
        </Button>
      </div>
    </div>
  );
};

export default LoginScreen;
