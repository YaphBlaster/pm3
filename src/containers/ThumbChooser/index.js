import React, { Component } from "react";
import Header from "../../components/Header";
import CharacterHeroImage from "../../components/CharacterHeroImage";
import ThumbnailGrid from "../../components/ThumbnailGrid";
import { MuiThemeProvider } from "material-ui/styles";
import { Snackbar } from "material-ui";
import ReactGA from "react-ga";

let character;

class Content extends Component {
  state = {
    heroImageHasLoaded: false
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

  render() {
    return (
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
        />
      </div>
    );
  }
}

export default Content;
