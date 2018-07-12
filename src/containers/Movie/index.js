import React from "react";
import CharacterGrid from "../../components/CharacterGrid";
import EpisodeLogo from "../../components/EpisodeLogo";

const Movie = props => {
  return (
    <div>
      <EpisodeLogo logo={props.logo} />
      <CharacterGrid characters={props.characters} episode={props.episode} />
    </div>
  );
};

export default Movie;
