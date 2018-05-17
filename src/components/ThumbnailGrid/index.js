import React, { Component } from "react";
import "./style.css";
import axios from "axios";
import Thumbnail from "../Thumbnail";
import Ripples from "react-ripples";
import Loader from "react-loaders";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";

const api = `${globalVariables.endpoint}keywords?tags=`;
let nextSkipBy = 0;
let thumbnailsTemp = [];
let screenshotsTemp = [];
const initialNumOfThumbs = 4;

class ThumbnailGrid extends Component {
  state = {
    thumbnails: [],
    screenshots: [],
    hasMoreThumbnails: true,
    isInitial: true,
    isLoading: true,
    open: false
  };

  fetchRequest = () => {
    this.setState({
      isLoading: true
    });
    let apiString = `${api}${this.props.tag}&skipAmt=${nextSkipBy}&movie=${
      this.props.episodeText
    }`;
    axios
      .get(apiString)
      .then(response => {
        console.log(this.props.episodeText);
        console.log(apiString);
        let responseTemp;
        if (nextSkipBy === 0) {
          responseTemp = response.data.slice(0, initialNumOfThumbs);
          nextSkipBy = initialNumOfThumbs;
        } else {
          responseTemp = response.data;
          nextSkipBy += 50;
          this.setState({
            isInitial: false
          });
        }
        let index = 0;
        for (const data of responseTemp) {
          if (this.props.episodeText === data.movie) {
            index++;
            thumbnailsTemp.push(data.thumb);
            const parsedUrl = data.url.lastIndexOf("/");
            screenshotsTemp.push(data.url.substring(parsedUrl + 1));
          }
        }

        this.setState(prevState => ({
          thumbnails: thumbnailsTemp,
          screenshots: screenshotsTemp,
          isLoading: false
        }));
        if (
          (index !== 50 && !this.state.isInitial) ||
          (index < 4 && this.state.isInitial)
        ) {
          this.setState({
            hasMoreThumbnails: false
          });
        }
      })

      .catch(error => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.fetchRequest();
  }

  componentWillUnmount() {
    thumbnailsTemp = [];
    screenshotsTemp = [];
    nextSkipBy = 0;
  }

  render() {
    return (
      <div className="thumbnail-grid">
        <div className="thumbnail-grid-text">
          {this.state.isInitial ? "Top Images" : "All Images"}
        </div>
        <div>
          {this.props.heroImageHasLoaded ? (
            <div className="thumbnails">
              {this.state.thumbnails.map((thumbnail, index) => {
                return (
                  <Thumbnail
                    className="thumbnail"
                    key={index}
                    thumbnailUrl={thumbnail}
                    screenshotUrl={this.state.screenshots[index]}
                    handleClick={this.props.handleClick}
                  />
                );
              })}
            </div>
          ) : null}

          {this.state.hasMoreThumbnails ? (
            <Ripples color="rgba(255,255,255,0.3)">
              <button
                className="show-more-button"
                onClick={() => this.fetchRequest()}
              >
                {this.state.isLoading || !this.props.heroImageHasLoaded ? (
                  <Loader type="line-scale" active />
                ) : (
                  "Show More"
                )}
              </button>
            </Ripples>
          ) : null}

          <div className="spacer" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episodeText: state.episodeSelector.episodeText
});
export default connect(mapStateToProps)(ThumbnailGrid);
