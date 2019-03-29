import React, { Component } from "react";
import ReactGA from "react-ga";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FontAwesome from "react-fontawesome";
import Ripples from "react-ripples";
import Loader from "react-loaders";
import Header from "../../components/Header";
import animateScrollTo from "animated-scroll-to";
import Snackbar from "material-ui/Snackbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";
import { addMeme } from "../Home/ducks";
import ImagesLoaded from "react-images-loaded";
import MemeModal from "../../components/MemeModal";

class MemeMaker extends Component {
  state = {
    hasAddedToMultiMeme: false,
    image: null,
    open: false,
    copied: false,
    hasImageLoaded: false,
    openModal: false
  };

  componentWillMount() {
    animateScrollTo(0);
  }

  componentWillUnmount() {
    animateScrollTo(0);
  }

  contextMenu = e => {
    e.preventDefault();
  };

  handleClick = () => {
    this.setState({
      open: true
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleClipboardClose = () => {
    this.setState({
      copied: false
    });
  };

  fetchRequest = () => {
    this.setState({
      loading: true,
      openModal: false
    });
    let makeMemeUrl = `${
      globalVariables.endpoint
    }makememe?url=https://prequelmemes.s3.amazonaws.com/${
      this.props.match.params.url
    }`;
    axios
      .get(
        `${makeMemeUrl}&topText=${this.topTextInput.value}&bottomText=${
          this.bottomTextInput.value
        }`
      )
      .then(response => {
        this.setState({
          image: response.data
        });
        axios.post('https://71c01mv30a.execute-api.us-west-2.amazonaws.com/dev/postUpdate',{ "imageLink": response.data.toString() })
        .then(function (response) {
          console.log("Here is the response from Twitter endpoint");
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  addToStrip = () => {
    if (this.props.memes.length < globalVariables.maxMemeAmount) {
      this.props.addMemeToCart(this.props.match.params.url);
      this.setState({
        hasAddedToMultiMeme: true
      });

      document.querySelector(".add-button").disabled = true;
    } else {
      ReactGA.event({
        category: "Cart",
        action: "Max Cart Reached",
        label: "Cart Usage",
        value: 1
      });
    }
    this.handleClick();
  };

  copyToClipboardEvent = () => {
    this.setState({
      copied: true
    });
    ReactGA.event({
      category: "Share",
      action: "Copied To Clipboard",
      label: "Social Usage",
      value: 1
    });
  };

  createMemeEvent = () => {
    this.fetchRequest();
    ReactGA.event({
      category: "Meme",
      action: "Created Single Meme",
      label: "Content Creation",
      value: 1
    });
  };

  addToStripEvent = () => {
    this.addToStrip();
    ReactGA.event({
      category: "Cart",
      action: "Added To Cart",
      label: "Cart Usage",
      value: 1
    });
  };

  imageLoaded = () => {
    this.setState({
      hasImageLoaded: true
    });
  };

  openModal = () => {
    this.setState({
      openModal: true
    });
  };

  onCloseModal = () => {
    this.setState({
      openModal: false
    });
  };

  modalTest = () => {
    console.log("modal confirmed");
  };

  render() {
    const hiddenStyle = { height: 0, overflow: "hidden" };
    return (
      <div>
        <Header title="Create Meme" />
        <div
          className="meme-maker"
          style={this.state.loaded ? null : hiddenStyle}
        >
          <ImagesLoaded done={() => this.setState({ loaded: true })}>
            {this.state.image ? (
              <div className="rendered">
                <img src={this.state.image} className="meme-image " alt="" />
                <CopyToClipboard
                  className="copy-to-clipboard"
                  text={this.state.image}
                  onCopy={this.copyToClipboardEvent}
                >
                  <div>
                    <FontAwesome
                      className="clipboard-icon"
                      name="link"
                      size="2x"
                      flip="horizontal"
                    />
                    {this.state.copied ? (
                      <FontAwesome
                        className="copy-text"
                        name="check-circle"
                        size="2x"
                      />
                    ) : (
                      <p className="copy-text">Copy Link</p>
                    )}
                  </div>
                </CopyToClipboard>
              </div>
            ) : (
              <div className="single-meme-form">
                {this.state.hasImageLoaded ? (
                  <span className="input-block">
                    <input
                      className="input-top-text"
                      type="text"
                      name="topText"
                      placeholder="TAP TO ADD CAPTION"
                      maxLength={globalVariables.characterLimit}
                      autoComplete="off"
                      ref={input => {
                        this.topTextInput = input;
                      }}
                    />
                  </span>
                ) : null}

                <img
                  onContextMenu={this.contextMenu}
                  src={
                    "https://prequelmemes.s3.amazonaws.com/" +
                    this.props.match.params.url
                  }
                  className="meme-image"
                  alt=""
                  onLoad={() => {
                    this.imageLoaded();
                  }}
                />

                {this.state.hasImageLoaded ? (
                  <span className="input-block">
                    <input
                      className="input-bottom-text"
                      type="text"
                      name="bottomText"
                      placeholder="TAP TO ADD CAPTION"
                      maxLength={globalVariables.characterLimit}
                      autoComplete="off"
                      ref={input => {
                        this.bottomTextInput = input;
                      }}
                    />
                  </span>
                ) : null}

                <MemeModal
                  openModal={this.state.openModal}
                  closeEvent={this.onCloseModal}
                  confirmEvent={this.createMemeEvent}
                />

                <span className="input-block">
                  <Ripples color="rgba(255,255,255,0.3)">
                    <button
                      className="create-meme"
                      onClick={() => this.openModal()}
                    >
                      {" "}
                      {this.state.loading ? (
                        <Loader type="line-scale" active />
                      ) : (
                        "Create Meme"
                      )}
                    </button>
                  </Ripples>
                </span>

                <span className="input-block">
                  <Ripples color="rgba(47,128,237,0.3)">
                    <button
                      className="add-button"
                      onClick={() => this.addToStripEvent()}
                    >
                      {this.state.hasAddedToMultiMeme ? (
                        <FontAwesome name="check-circle" size="2x" />
                      ) : (
                        "Add to Strip"
                      )}
                    </button>
                  </Ripples>
                </span>
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
            )}
          </ImagesLoaded>
          <MuiThemeProvider>
            <Snackbar
              open={this.state.copied}
              contentStyle={{
                color: "rgb(255, 64, 129)"
              }}
              message="Link copied to your clipboard!"
              autoHideDuration={4000}
              onRequestClose={this.handleClipboardClose}
            />
          </MuiThemeProvider>
        </div>
        {this.state.loaded ? null : (
          <Loader className="center" type="line-scale" active color="#bf9800" />
        )}
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
)(MemeMaker);
