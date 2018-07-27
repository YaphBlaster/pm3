import React, { Component } from "react";
import axios from "axios";
import Thumbnail from "../Thumbnail";
import Ripples from "react-ripples";
import Loader from "react-loaders";
import globalVariables from "../../data/GlobalVariables";
import { connect } from "react-redux";
import ImagesLoaded from "react-images-loaded";

const api = `${globalVariables.endpoint}keywords2?tags=`;
let nextSkipBy = 0;
let thumbnailsTemp = [];
let screenshotsTemp = [];
let idsTemp = [];

class ThumbnailGrid extends Component {
  state = {
    thumbnails: [],
    screenshots: [],
    ids: [],
    hasMoreThumbnails: true,
    isInitial: true,
    isLoading: true,
    open: false,
    hasAllLoaded: false
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
        let responseTemp;
        responseTemp = response.data;
        nextSkipBy += 50;
        this.setState({
          isInitial: false
        });

        let index = 0;
        for (const data of responseTemp) {
          index++;
          thumbnailsTemp.push(data.thumb);
          const parsedUrl = data.url.lastIndexOf("/");
          screenshotsTemp.push(data.url.substring(parsedUrl + 1));
          idsTemp.push(data._id);
        }
        this.setState(prevState => ({
          thumbnails: thumbnailsTemp,
          screenshots: screenshotsTemp,
          ids: idsTemp,
          isLoading: false
        }));

        if (index !== 50 && !this.state.isInitial) {
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
    idsTemp = [];
    nextSkipBy = 0;
  }

  imagesHaveLoaded = () => {
    this.setState({
      hasAllLoaded: true
    });
    this.props.hasLoaded();
  };

  render() {
    return (
      <div className="thumbnail-grid">
        {this.props.heroImageHasLoaded ? (
          <div className="thumbnail-grid-text">Select an image</div>
        ) : null}

        <div>
          {this.props.heroImageHasLoaded ? (
            <ImagesLoaded done={() => this.imagesHaveLoaded()}>
              <div className="thumbnails">
                {this.state.thumbnails.map((thumbnail, index) => {
                  return (
                    <Thumbnail
                      className="thumbnail"
                      key={index}
                      thumbnailUrl={thumbnail}
                      screenshotUrl={this.state.screenshots[index]}
                      handleClick={this.props.handleClick}
                      hasAllLoaded={this.state.hasAllLoaded}
                      id={this.state.ids[index]}
                    />
                  );
                })}
              </div>
            </ImagesLoaded>
          ) : null}

          {this.state.hasMoreThumbnails && !this.state.isInitial ? (
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
