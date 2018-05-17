import React from "react";
import "./style.css";

const EpisodeLogo = props => {
  return (
    <div className="logo-wrapper">
      <img className="movie-logo" src={props.logo} alt="" />
    </div>
  );
};

export default EpisodeLogo;
