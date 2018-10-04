import React, { Component } from "react";
import CharacterData from "../../data/CharacterData";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
import { connect } from "react-redux";
import { changedEpisode } from "../../components/EpisodeSelector/ducks";
import EpisodeSelector from "../../components/EpisodeSelector";
import Movie from "../Movie";
import { logo as movieLogo1 } from "../../assets/episode1/Logo";
import { logo as movieLogo2 } from "../../assets/episode2/Logo";
import { logo as movieLogo3 } from "../../assets/episode3/Logo";
import Header from "../../components/Header";
import { debounce } from "debounce";

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class Home extends Component {
  state = {};

  handleChangeIndex = index => {
    this.props.changeEpTo(index);
  };

  componentDidMount() {
    window.onresize = debounce(() => this.swipeableActions.updateHeight(), 200);
  }

  render() {
    return (
      <div>
        <Header hideBackButton={true} />
        <BindKeyboardSwipeableViews
          animateHeight={true}
          resistance
          className="swipe-wrapper"
          index={this.props.episode}
          onChangeIndex={this.handleChangeIndex}
          action={actions => {
            this.swipeableActions = actions;
          }}
          onLoad={() => this.swipeableActions.updateHeight()}
        >
          <Movie
            characters={CharacterData.ep1}
            episode="ep1"
            logo={movieLogo1}
            updateHeight={() => this.swipeableActions.updateHeight()}
          />
          <Movie
            characters={CharacterData.ep2}
            episode="ep2"
            logo={movieLogo2}
            updateHeight={() => this.swipeableActions.updateHeight()}
          />
          <Movie
            characters={CharacterData.ep3}
            episode="ep3"
            logo={movieLogo3}
            updateHeight={() => this.swipeableActions.updateHeight()}
          />
        </BindKeyboardSwipeableViews>
        <EpisodeSelector />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episode: state.episodeSelector.episode
});

const mapDispatchToProps = dispatch => ({
  changeEpTo: episode => dispatch(changedEpisode(episode))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
