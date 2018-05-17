import React, { Component } from "react";
import CharacterData from "../../data/CharacterData";
import CharacterGrid from "../../components/CharacterGrid";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import { connect } from "react-redux";
import { changedEpisode } from "../../components/EpisodeSelector/ducks";
import EpisodeSelector from "../../components/EpisodeSelector";
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
