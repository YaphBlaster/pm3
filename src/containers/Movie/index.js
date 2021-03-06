import React, { Component } from "react";
import CharacterGrid from "../../components/CharacterGrid";
import EpisodeLogo from "../../components/EpisodeLogo";
import ImagesLoaded from "react-images-loaded";
import Loader from "react-loaders";

class Movie extends Component {
  state = { showImages: false };

  doneLoading = () => {
    this.setState({ showImages: true });
    this.props.updateHeight();
  };
  render() {
    const hiddenStyle = { height: 0, overflow: "hidden" };
    return (
      <div>
        <div style={this.state.showImages ? null : hiddenStyle}>
          <EpisodeLogo logo={this.props.logo} />
          <ImagesLoaded done={() => this.doneLoading()}>
            <CharacterGrid
              characters={this.props.characters}
              episode={this.props.episode}
            />
          </ImagesLoaded>
        </div>
        {this.state.showImages ? null : (
          <Loader className="center" type="line-scale" active color="#bf9800" />
        )}
      </div>
    );
  }
}

export default Movie;
