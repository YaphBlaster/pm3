import React, { Component } from "react";
import CharacterGrid from "../../components/CharacterGrid";
import EpisodeLogo from "../../components/EpisodeLogo";
import ImagesLoaded from "react-images-loaded";
import Loader from "react-loaders";

class Movie extends Component {
  state = { showImages: false };

  doneLoading = () => {
    this.props.updateHeight();
    this.setState({ showImages: true });
  };
  render() {
    const hiddenStyle = { height: 0, overflow: "hidden" };
    const visibleStyle = {};
    return (
      <div>
        <div style={this.state.showImages ? visibleStyle : hiddenStyle}>
          <EpisodeLogo logo={this.props.logo} />
          <ImagesLoaded done={() => this.doneLoading()}>
            <CharacterGrid
              characters={this.props.characters}
              episode={this.props.episode}
            />
          </ImagesLoaded>
        </div>
        {this.state.showImages ? null : (
          <Loader className="center" type="line-scale" active />
        )}
      </div>
    );
  }
}

export default Movie;
