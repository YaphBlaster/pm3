import React, { Component } from "react";
import "./style.css";
import { connect } from "react-redux";
import { changedEpisode } from "./ducks";

import PropTypes from "prop-types";

class EpisodeSelector extends Component {
  render() {
    return (
      <div>
        <div className="navigation-bar">
          <div className="navigation-tab">
            <button
              className={
                this.props.episode === 0
                  ? "navigation-button active"
                  : "navigation-button"
              }
              onClick={() => this.props.changeEpTo(0)}
            >
              I
            </button>
            <button
              className={
                this.props.episode === 1
                  ? "navigation-button active"
                  : "navigation-button"
              }
              onClick={() => this.props.changeEpTo(1)}
            >
              II
            </button>{" "}
            <button
              className={
                this.props.episode === 2
                  ? "navigation-button active"
                  : "navigation-button"
              }
              onClick={() => this.props.changeEpTo(2)}
            >
              III
            </button>
          </div>
        </div>
      </div>
    );
  }
}

EpisodeSelector.propTypes = {
  index: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  episode: state.episodeSelector.episode
});

const mapDispatchToProps = dispatch => ({
  changeEpTo: episode => dispatch(changedEpisode(episode))
});

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeSelector);
