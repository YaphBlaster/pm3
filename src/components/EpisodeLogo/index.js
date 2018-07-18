import React from "react";

const EpisodeLogo = props => {
  return (
    <div className="logo-wrapper">
      <img className="movie-logo" src={props.logo} alt="" />
    </div>
  );
};

export default EpisodeLogo;
