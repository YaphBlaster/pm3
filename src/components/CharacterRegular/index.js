import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.css";
import { Link, Route } from "react-router-dom";
import ThumbChooser from "../../containers/ThumbChooser";

class CharacterRegular extends Component {
  state = {
    hasLoaded: false
  };
  render() {
    return (
      <div className="regular-character">
        <Link
          className="regular-character"
          to={`/${this.props.episodeOrigin}/${this.props.tag}/${
            this.props.name
          }`}
        >
          <img
            className="selector-image"
            src={this.props.image}
            alt=""
            onLoad={() => this.setState({ hasLoaded: true })}
          />
          {this.state.hasLoaded ? (
            <span className="name-tag">{this.props.name}</span>
          ) : null}
        </Link>
      </div>
    );
  }
}

export default CharacterRegular;

CharacterRegular.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
