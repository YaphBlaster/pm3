import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import ReactGA from "react-ga";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";
import { addText } from "../../containers/Home/ducks";
import ImagesLoaded from "react-images-loaded";

class StripMeme extends Component {
  state = {
    hasImageLoaded: false
  };

  deleteFromCartEvent = () => {
    this.props.removeItem(
      this.props.meme,
      this.props.id,
      this.props.randomizer
    );
    ReactGA.event({
      category: "Cart",
      action: "Deleted From Cart",
      label: "Cart Usage",
      value: 1
    });
  };

  imageLoaded = () => {
    this.setState({
      hasImageLoaded: true
    });
  };

  contextMenu = e => {
    e.preventDefault();
  };

  getTextValue = () => {
    for (let i = 0; i < this.props.memes.length; i++) {
      if (this.props.memes[i].randomizer === this.props.randomizer) {
        return this.props.memes[i].text;
      }
    }
  };
  render() {
    const hiddenStyle = { height: 0, overflow: "hidden" };
    return (
      <div
        style={this.state.hasImageLoaded ? null : hiddenStyle}
        ref={divBox => {
          this.stripMeme = divBox;
        }}
      >
        <ImagesLoaded done={() => this.imageLoaded()}>
          <FontAwesome
            style={this.state.hasImageLoaded ? null : hiddenStyle}
            className="trash-button"
            name="trash"
            size="2x"
            onClick={this.deleteFromCartEvent}
          />
          <img
            onContextMenu={this.contextMenu}
            src={"https://prequelmemes.s3.amazonaws.com/" + this.props.meme}
            className="meme-image"
            alt=""
          />

          <span className="input-block">
            <input
              className="input-bottom-text"
              type="text"
              name="bottomText"
              placeholder="tap to add caption"
              maxLength={globalVariables.characterLimit}
              autoComplete="off"
              value={this.getTextValue()}
              ref={input => {
                this.bottomTextInput = input;
              }}
              onChange={() =>
                this.props.addText(
                  this.bottomTextInput.value,
                  this.props.randomizer
                )
              }
              style={this.state.hasImageLoaded ? null : { display: "none" }}
            />
          </span>
        </ImagesLoaded>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  memes: state.memeCart.memes
});

const mapDispatchToProps = dispatch => ({
  addText: (text, randomizerKey) => dispatch(addText(text, randomizerKey))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StripMeme);
