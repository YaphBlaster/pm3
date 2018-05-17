import React, { Component } from "react";
import FontAwesome from "react-fontawesome";
import ReactGA from "react-ga";
import "./style.css";
import globalVariables from "../../data/GlobalVariables";

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
  render() {
    return (
      <div
        ref={divBox => {
          this.stripMeme = divBox;
        }}
      >
        <FontAwesome
          className="trash-button"
          name="trash"
          size="2x"
          onClick={this.deleteFromCartEvent}
        />
        <img
          src={"https://prequelmemes.s3.amazonaws.com/" + this.props.meme}
          className="meme-image"
          alt=""
          onLoad={() => this.imageLoaded()}
        />
        <br />

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
      </div>
    );
  }
}

export default StripMeme;
