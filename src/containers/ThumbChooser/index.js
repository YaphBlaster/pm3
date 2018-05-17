import React, { Component } from "react";
import Header from "../../components/Header";
import CharacterHeroImage from "../../components/CharacterHeroImage";
import ThumbnailGrid from "../../components/ThumbnailGrid";
import { MuiThemeProvider } from "material-ui/styles";
import { Snackbar } from "material-ui";
// import ReactGA from "react-ga";

let character;
let memeArray;
const maxMemeAmount = 15;

class Content extends Component {
  state = {
    open: false,
    heroImageHasLoaded: false
  };
  componentWillMount() {
    character = this.props.match.params;
    console.log(character);
    window.scrollTo(0, 0);
  }

  handleClick = url => {
    this.setState({
      open: true
    });
    this.addToStrip(url);
  };

  componentDidMount() {
    if (localStorage.getItem("memes")) {
      memeArray = JSON.parse(localStorage.getItem("memes") || "[]");
    } else {
      memeArray = [];
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  addToStrip = url => {
    if (
      JSON.parse(localStorage.getItem("memes") || "[]").length < maxMemeAmount
    ) {
      memeArray.push(url);
      localStorage.setItem("memes", JSON.stringify(memeArray));
    } else {
      //   ReactGA.event({
      //     category: "Cart",
      //     action: "Max Cart Reached",
      //     label: "Cart Usage",
      //     value: 1
      //   });
    }
  };

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
        />
        <ThumbnailGrid
          tag={character.tag}
          episodeRef={character.ep}
          handleClick={this.handleClick}
          heroImageHasLoaded={this.state.heroImageHasLoaded}
        />
        <MuiThemeProvider>
          <Snackbar
            open={this.state.open}
            contentStyle={{
              color: "rgb(255, 64, 129)"
            }}
            message={
              JSON.parse(localStorage.getItem("memes") || "[]").length <
              maxMemeAmount
                ? "Image added to Meme Strip"
                : "Meme Strip is full"
            }
            autoHideDuration={4000}
            onRequestClose={this.handleRequestClose}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Content;
