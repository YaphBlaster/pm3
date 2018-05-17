import React, { Component } from "react";
import "./style.css";
import CharacterData from "../../data/CharacterData";
import { connect } from "react-redux";

class CharacterHeroImage extends Component {
  state = {
    hasLoaded: false
  };
  imageLoaded = () => {
    this.props.heroImageHasLoaded();
    this.setState({
      hasLoaded: true
    });
  };

  render() {
    return (
      <div className="character-profile">
        <img
          className="character-profile-hero-image"
          src={CharacterData[this.props.episodeRef][this.props.tag].hero}
          alt=""
          onLoad={() => this.imageLoaded()}
        />
        {this.state.hasLoaded ? (
          <div>
            <span className="character-profile-name-text">
              {this.props.name}
            </span>
            <span className="character-profile-episode-text">
              {this.props.episodeText}
            </span>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeText: state.episodeSelector.episodeText
});

export default connect(mapStateToProps)(CharacterHeroImage);
