import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import About from "../../containers/About";

let memeArray;
const maxMemeAmount = 15;
class Thumbnail extends Component {
  state = {
    hasBeenAdded: false,
    hasLoadedImage: false
  };
  componentWillMount() {
    if (localStorage.getItem("memes")) {
      memeArray = JSON.parse(localStorage.getItem("memes") || "[]");
    } else {
      memeArray = [];
    }
  }

  addToStrip = () => {
    this.setState({
      hasBeenAdded: true
    });

    this.props.handleClick(this.props.screenshotUrl);
    setTimeout(() => {
      this.setState({
        hasBeenAdded: false
      });
    }, 4000);
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
              JSON.parse(localStorage.getItem("memes") || "[]").length <
                maxMemeAmount && this.state.hasBeenAdded
                ? "check-circle"
                : "plus"
            }
            className={
              JSON.parse(localStorage.getItem("memes") || "[]").length <
                maxMemeAmount && this.state.hasBeenAdded
                ? "add-thumb-to-multi-added"
                : "add-thumb-to-multi"
            }
            size="lg"
            onClick={this.addToStrip}
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

        <Route path="/createMeme" component={About} />
      </div>
    );
  }
}

export default Thumbnail;
