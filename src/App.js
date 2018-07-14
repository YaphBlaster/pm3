import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import ThumbChooser from "./containers/ThumbChooser";
import SingleMemeMaker from "./containers/SingleMemeMaker";
import MultiMemeMaker from "./containers/MultiMemeMaker";
import "loaders.css";
import ReactGA from "react-ga";
import WithTracker from "./containers/WithTracker";

const DEFAULT_CONFIG = {
  trackingId: "UA-101421397-1",
  debug: true,
  gaOptions: {
    cookieDomain: "none"
  }
};

class App extends Component {
  componentDidMount() {
    ReactGA.initialize([DEFAULT_CONFIG]);
  }

  render() {
    return (
      <Router>
        <div className="wrapper ">
          <Route exact path="/" component={WithTracker(Home)} />
          <Route path="/:ep/:tag/:name" component={WithTracker(ThumbChooser)} />
          <Route
            path="/createMeme/:url"
            component={WithTracker(SingleMemeMaker)}
          />
          <Route path="/createStrip" component={WithTracker(MultiMemeMaker)} />
        </div>
      </Router>
    );
  }
}

export default App;
