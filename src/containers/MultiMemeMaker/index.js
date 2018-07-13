import React, { Component } from "react";
import ReactGA from "react-ga";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton
} from "react-share";
import StripMeme from "../../components/StripMeme";
import { FacebookIcon, TwitterIcon, RedditIcon } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import FontAwesome from "react-fontawesome";
import Ripples from "react-ripples";
import Loader from "react-loaders";
import Header from "../../components/Header";
import animateScrollTo from "animated-scroll-to";
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove
} from "react-sortable-hoc";
import ImagesLoaded from "react-images-loaded";
import Snackbar from "material-ui/Snackbar";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";
import { replaceMemes, clearMemes, addMeme, removeMeme } from "../Home/ducks";

const DragHandle = SortableHandle(() => (
  <FontAwesome className="move-button" name="bars" size="2x" />
));

const SortableItem = SortableElement(({ value }) => (
  <div>
    <DragHandle />
    {value}
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </div>
  );
});

class MultiMemeMaker extends Component {
  state = {
    image: null,
    items: [],
    copied: false
  };

  componentWillMount() {
    animateScrollTo(0);
    this.props.memes.map((meme, index) => {
      return this.state.items.push(
        <StripMeme
          key={index}
          meme={meme.memeID}
          id={index}
          randomizer={meme.randomizer}
          removeItem={this.removeMeme}
          text={meme.text}
        />
      );
    });
  }

  componentWillUnmount() {
    animateScrollTo(0);
  }

  removeMeme = (memeId, index, key) => {
    let itemsTemp = this.state.items;
    let itemsTemp2 = [];
    let memesList = this.props.memes;

    let foundIndex = memesList.findIndex(element => {
      return element.memeID === memeId;
    });

    this.props.removeFromList(memeId, key);

    itemsTemp.forEach(element => {
      if (element.props.meme === memeId && element.props.randomizer === key) {
      } else {
        itemsTemp2.push(element);
      }
    });

    this.setState({
      items: itemsTemp2
    });
    this.forceUpdate();
  };

  onSortStart = () => {
    const inputs = document.querySelectorAll(".input-bottom-text");
    for (const input of inputs) {
      input.style.visibility = "hidden";
    }
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    const inputs = document.querySelectorAll(".input-bottom-text");
    let oldInputTextTemp = inputs[oldIndex].value;
    let newInputTextTemp = inputs[newIndex].value;

    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });

    for (const input of inputs) {
      input.style.visibility = "visible";
    }

    document.querySelectorAll(".input-bottom-text")[
      newIndex
    ].value = oldInputTextTemp;
    document.querySelectorAll(".input-bottom-text")[
      oldIndex
    ].value = newInputTextTemp;
  };

  handleClipboardClose = () => {
    this.setState({
      copied: false
    });
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

  fetchRequest = () => {
    let memeInputs = document.querySelectorAll(".input-bottom-text");
    let memeImages = document.querySelectorAll(".meme-image");

    let post = { memes: [] };

    for (let i = 0; i < memeImages.length; i++) {
      post.memes.push({
        url: memeImages[i].src,
        topText: "",
        bottomText: memeInputs[i].value
      });
    }

    this.setState({
      loading: true
    });

    if (memeImages.length > 1) {
      axios(`${globalVariables.endpoint}makemultimeme`, {
        method: "POST",
        data: {
          post: post
        }
      })
        .then(response => {
          this.setState({
            image: response.data
          });
          this.props.clearMemeList();
        })
        .then(response => {
          document.getElementsByClassName(
            "sharethis-inline-share-buttons"
          )[0].style.opacity =
            "1";
        })
        .catch(error => {
          console.log("ERROR::", error.data);
        });
    } else {
      const makeMemeUrl = `${globalVariables.endpoint}makememe?url=`;
      memeImages[0].src;
      axios
        .get(`${makeMemeUrl}&topText=&bottomText=${memeInputs[0].value}`)
        .then(response => {
          this.setState({
            image: response.data
          });
          this.props.clearMemeList();
          ReactGA.event({
            category: "Meme",
            action: "Created Single Meme with Multi Tool",
            label: "Content Creation",
            value: 1
          });
        })
        .then(response => {
          document.getElementsByClassName(
            "sharethis-inline-share-buttons"
          )[0].style.opacity =
            "1";
        })
        .catch(error => {
          console.log(error);
        });
    }
    this.setState(this.state);
  };

  createMemeStripEvent = () => {
    this.fetchRequest();
    ReactGA.event({
      category: "Meme",
      action: "Created Multi Meme",
      label: "Content Creation",
      value: 1
    });
  };

  render() {
    var hiddenStyle = { height: 0, overflow: "hidden" };
    var visibleStyle = {};
    return (
      <div className="meme-maker">
        <Header showBackButton={true} title="Create Meme Strip" />
        {this.props.memes.length === 0 && this.state.image === null ? (
          <div className="empty-state">
            <FontAwesome
              className="film-bg"
              name="film"
              size="3x"
              style={{
                color: "white",
                opacity: "0.3"
              }}
            />
            <p>Here you can create a meme with multiple images!</p>
            <p>Add some images to get started!</p>
          </div>
        ) : (
          <div>
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
              <div style={this.state.showImages ? visibleStyle : hiddenStyle}>
                <ImagesLoaded done={() => this.setState({ showImages: true })}>
                  <SortableList
                    items={this.state.items}
                    onSortStart={this.onSortStart}
                    onSortEnd={this.onSortEnd}
                    useDragHandle={true}
                  />
                </ImagesLoaded>
              </div>
            )}
            {this.state.image ? null : (
              <div>
                <br />
                <br />
                <br />
                {this.state.showImages ? (
                  <Ripples color="rgba(255,255,255,0.3)">
                    <button
                      className="create-meme"
                      onClick={() => this.createMemeStripEvent()}
                    >
                      {" "}
                      {this.state.loading ? (
                        <Loader type="line-scale" active />
                      ) : (
                        "Create Meme Strip"
                      )}
                    </button>
                  </Ripples>
                ) : null}
              </div>
            )}
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
        <div
          data-url={this.state.image}
          className="sharethis-inline-share-buttons"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  memes: state.memeCart.memes
});

const mapDispatchToProps = dispatch => ({
  replaceMemeList: memesList => dispatch(replaceMemes(memesList)),
  addToMemeList: memeId => dispatch(addMeme(memeId)),
  removeFromList: (memeId, randomKey) =>
    dispatch(removeMeme(memeId, randomKey)),
  clearMemeList: () => dispatch(clearMemes())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiMemeMaker);
