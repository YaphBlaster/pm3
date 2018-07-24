import React, { Component } from "react";
import { Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";
import { addMeme } from "../../containers/Home/ducks";
import { MuiThemeProvider } from "material-ui/styles";
import { Snackbar } from "material-ui";
import ReactGA from "react-ga";
import Loader from "react-loaders";

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
    ReactGA.event({
      category: "Cart",
      action: "Added To Cart With Plus Icon",
      label: "Cart Usage",
      value: 1
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

    this.props.memes.length < globalVariables.maxMemeAmount
      ? this.addToStrip()
      : null;
  };

  imageLoaded = () => {
    this.setState({
      hasLoadedImage: true
    });
  };

  render() {
    const hiddenStyle = { height: 0, overflow: "hidden" };
    return (
      <div>
        {this.state.hasLoadedImage && this.props.hasAllLoaded ? (
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
        ) : (
          <div style={{ height: "200px" }}>
            <Loader type="line-scale" active color="#bf9800" />
          </div>
        )}
        <Link
          style={
            this.state.hasLoadedImage && this.props.hasAllLoaded
              ? null
              : hiddenStyle
          }
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Thumbnail);
