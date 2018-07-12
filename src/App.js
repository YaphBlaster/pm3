import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import ThumbChooser from "./containers/ThumbChooser";
import SingleMemeMaker from "./containers/SingleMemeMaker";
import MultiMemeMaker from "./containers/MultiMemeMaker";
import "loaders.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper ">
          <Route exact path="/" component={Home} />
          <Route path="/:ep/:tag/:name" component={ThumbChooser} />
          <Route path="/createMeme/:url" component={SingleMemeMaker} />
          <Route path="/createStrip" component={MultiMemeMaker} />
        </div>
      </Router>
    );
  }
}

export default App;
