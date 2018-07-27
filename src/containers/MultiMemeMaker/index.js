import React, { Component } from "react";
import ReactGA from "react-ga";
import axios from "axios";

import StripMeme from "../../components/StripMeme";
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
import {
  replaceMemes,
  clearMemes,
  addMeme,
  removeMeme,
  moveMeme
} from "../Home/ducks";

const DragHandle = SortableHandle(() => (
  <FontAwesome className="move-button" name="arrows" size="2x" />
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
    document.querySelector(".create-meme").style.visibility = "hidden";

    let itemsTemp = this.state.items;
    this.props.removeFromList(memeId, key);

    itemsTemp.forEach(element => {
      if (element.props.meme === memeId && element.props.randomizer === key) {
        itemsTemp.splice(itemsTemp.indexOf(element), 1);
      }
    });

    this.setState({
      items: itemsTemp
    });
    if (this.props.memes.length > 1) {
      setTimeout(() => {
        document.querySelector(".create-meme").style.visibility = "visible";
      }, 50);
    }
  };

  onSortStart = () => {
    for (const input of document.querySelectorAll(".input-bottom-text")) {
      input.style.visibility = "hidden";
    }
    document.querySelector(".create-meme").style.visibility = "hidden";
  };

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.props.moveMeme(oldIndex, newIndex);

    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });

    for (const input of document.querySelectorAll(".input-bottom-text")) {
      input.style.visibility = "visible";
    }
    setTimeout(() => {
      document.querySelector(".create-meme").style.visibility = "visible";
    }, 50);
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
    var hiddenStyle = { display: "none" };
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
              <div className="rendered">
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
              </div>
            ) : (
              <div className="meme-list">
                <div style={this.state.showImages ? null : hiddenStyle}>
                  <ImagesLoaded
                    done={() => this.setState({ showImages: true })}
                  >
                    <SortableList
                      items={this.state.items}
                      onSortStart={this.onSortStart}
                      onSortEnd={this.onSortEnd}
                      useDragHandle={true}
                    />
                  </ImagesLoaded>
                </div>
                {this.state.showImages ? null : (
                  <Loader
                    className="center"
                    type="line-scale"
                    active
                    color="#bf9800"
                  />
                )}
              </div>
            )}
            {this.state.image ? null : (
              <div>
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
  clearMemeList: () => dispatch(clearMemes()),
  moveMeme: (oldIndex, newIndex) => dispatch(moveMeme(oldIndex, newIndex))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiMemeMaker);
