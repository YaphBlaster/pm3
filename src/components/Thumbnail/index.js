import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";
import { addMeme } from "../../containers/Home/ducks";
import { MuiThemeProvider } from "material-ui/styles";
import { Snackbar } from "material-ui";

let memeArray;
const maxMemeAmount = 15;
class Thumbnail extends Component {
  state = {
    hasBeenAdded: false,
    hasLoadedImage: false,
    open: false
  };

  addToStrip = () => {
    this.setState({
      hasBeenAdded: true
    });
    this.props.addMemeToCart(this.props.screenshotUrl);
    setTimeout(() => {
      this.setState({
        hasBeenAdded: false
      });
    }, 4000);
  };

  handleClick = () => {
    this.setState({
      open: true
    });
    {this.props.memes.length < globalVariables.maxMemeAmount ? this.addToStrip() : null}
    
  };

  imageLoaded = () => {
    this.setState({
      hasLoadedImage: true
    });
  };

  render() {
    return (
      <div>
        {this.state.hasLoadedImage ? (
          <FontAwesome
            name={
              this.props.memes.length < globalVariables.maxMemeAmount &&
              this.state.hasBeenAdded
                ? "check-circle"
                : "plus"
            }
            className={
              this.props.memes.length < globalVariables.maxMemeAmount &&
              this.state.hasBeenAdded
                ? "add-thumb-to-multi-added"
                : "add-thumb-to-multi"
            }
            size="lg"
            onClick={this.handleClick}
          />
        ) : null}

        <Link
          className="thumbnail"
          to={`/createMeme/${this.props.screenshotUrl}`}
        >
          <img
            className="thumbnail-image"
            src={this.props.thumbnailUrl}
            alt="thumbnail"
            onLoad={() => this.imageLoaded()}
          />
        </Link>
        <MuiThemeProvider>
          <Snackbar
            open={this.state.open}
            contentStyle={{
              color: "rgb(255, 64, 129)"
            }}
            message={
              this.props.memes.length < globalVariables.maxMemeAmount
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

const mapStateToProps = state => ({
  memes: state.memeCart.memes
});

const mapDispatchToProps = dispatch => ({
  addMemeToCart: memeId => dispatch(addMeme(memeId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Thumbnail);
