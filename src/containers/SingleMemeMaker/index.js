import React, { Component } from "react";
import ReactGA from "react-ga";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton
} from "react-share";

import { FacebookIcon, TwitterIcon, RedditIcon } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FontAwesome from "react-fontawesome";
import Ripples from "react-ripples";
import Loader from "react-loaders";
import Header from "../../components/Header";
import animateScrollTo from "animated-scroll-to";
import Snackbar from "material-ui/Snackbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import globalVariables from "../../data/GlobalVariables";

let url = "";
let makeMemeUrl = "";
let memeArray;
const maxMemeAmount = 15;

class MemeMaker extends Component {
  state = {
    hasAddedToMultiMeme: false,
    image: null,
    open: false,
    copied: false,
    hasImageLoaded: false
  };

  componentWillMount() {
    animateScrollTo(0);
  }

  componentWillUnmount() {
    animateScrollTo(0);
  }
  componentDidMount() {
    if (localStorage.getItem("memes")) {
      memeArray = JSON.parse(localStorage.getItem("memes") || "[]");
    } else {
      memeArray = [];
    }
  }

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
      loading: true
    });
    makeMemeUrl = `${
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
      })
      .catch(error => {
        console.log(error);
      });
  };

  addToStrip = () => {
    if (
      JSON.parse(localStorage.getItem("memes") || "[]").length <
      globalVariables.maxMemeAmount
    ) {
      memeArray.push(this.props.match.params.url);
      localStorage.setItem("memes", JSON.stringify(memeArray));
      this.setState({
        hasAddedToMultiMeme: true
      });

      document.querySelector(".add-button").disabled = true;
    } else {
      //   ReactGA.event({
      //     category: "Cart",
      //     action: "Max Cart Reached",
      //     label: "Cart Usage",
      //     value: 1
      //   });
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

  render() {
    return (
      <div className="meme-maker">
        <Header title="Create Meme" />
        {this.state.image ? (
          <div>
            <img src={this.state.image} className="meme-image" alt="" />
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

            <p>Or share directly to</p>
            <div className="share-bar">
              <FacebookShareButton
                url={this.state.image}
                className="facebook-share-button share-button"
              >
                <FacebookIcon size={64} />
              </FacebookShareButton>
              <TwitterShareButton
                url={this.state.image}
                className="twitter-share-button share-button"
              >
                <TwitterIcon size={64} />
              </TwitterShareButton>
              <RedditShareButton
                url={this.state.image}
                className="reddit-share-button share-button"
              >
                <RedditIcon size={64} />
              </RedditShareButton>
            </div>
          </div>
        ) : (
          <div>
            {this.state.hasImageLoaded ? (
              <input
                className="input-top-text"
                type="text"
                name="topText"
                placeholder="tap to add caption"
                maxLength={globalVariables.characterLimit}
                autoComplete="off"
                ref={input => {
                  this.topTextInput = input;
                }}
              />
            ) : null}

            <br />
            <img
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
            <br />

            {this.state.hasImageLoaded ? (
              <input
                className="input-bottom-text"
                type="text"
                name="bottomText"
                placeholder="tap to add caption"
                maxLength={globalVariables.characterLimit}
                autoComplete="off"
                ref={input => {
                  this.bottomTextInput = input;
                }}
              />
            ) : null}

            <br />
            <br />
            <br />
            <Ripples color="rgba(255,255,255,0.3)">
              <button
                className="create-meme"
                onClick={() => this.createMemeEvent()}
              >
                {" "}
                {this.state.loading ? (
                  <Loader type="line-scale" active />
                ) : (
                  "Create Meme"
                )}
              </button>
            </Ripples>

            <br />
            <br />
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
        )}
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
    );
  }
}

export default MemeMaker;
