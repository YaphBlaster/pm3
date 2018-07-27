import React, { Component } from "react";
import CharacterData from "../../data/CharacterData";
import ImagesLoaded from "react-images-loaded";
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

  getEpisode = episodeString => {
    switch (episodeString) {
      case "ep1":
        return "Episode I";
      case "ep2":
        return "Episode II";
      case "ep3":
        return "Episode III";
      default:
        return "";
    }
  };

  render() {
    const hiddenStyle = { height: 0, overflow: "hidden" };

    return (
      <div
        style={this.state.loaded ? null : hiddenStyle}
        className="character-profile"
      >
        <ImagesLoaded done={() => this.setState({ loaded: true })}>
          <img
            className="character-profile-hero-image"
            src={CharacterData[this.props.epCode][this.props.tag].hero}
            alt=""
            onLoad={() => this.imageLoaded()}
          />
          {this.state.hasLoaded ? (
            <div>
              <span className="character-profile-name-text">
                {this.props.name}
              </span>
              <span className="character-profile-episode-text">
                {this.getEpisode(this.props.epCode)}
              </span>
            </div>
          ) : null}
        </ImagesLoaded>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeText: state.episodeSelector.episodeText
});

export default connect(mapStateToProps)(CharacterHeroImage);
