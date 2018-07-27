import React, { Component } from "react";
import Header from "../../components/Header";
import CharacterHeroImage from "../../components/CharacterHeroImage";
import ThumbnailGrid from "../../components/ThumbnailGrid";

let character;

class Content extends Component {
  state = {
    heroImageHasLoaded: false,
    initialLoad: false
  };
  componentWillMount() {
    character = this.props.match.params;
    window.scrollTo(0, 0);
  }

  heroImageHasLoaded = () => {
    this.setState({
      heroImageHasLoaded: true
    });
  };

  setHasLoaded = () => {
    this.setState({
      initialLoad: true
    });
  };

  render() {
    return (
      <div>
        <div>
          <Header title={character.name} />

          <CharacterHeroImage
            name={character.name}
            episodeRef={character.ep}
            tag={character.tag}
            heroImageHasLoaded={this.heroImageHasLoaded}
            epCode={character.ep}
          />
          <ThumbnailGrid
            tag={character.tag}
            episodeRef={character.ep}
            handleClick={this.handleClick}
            heroImageHasLoaded={this.state.heroImageHasLoaded}
            hasLoaded={() => this.setHasLoaded()}
          />
        </div>
      </div>
    );
  }
}

export default Content;
