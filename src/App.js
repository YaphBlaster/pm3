import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/About";
import "./App.css";
import Header from "./components/Header";
import ThumbChooser from "./containers/ThumbChooser";
import SingleMemeMaker from "./containers/SingleMemeMaker";
import "loaders.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper ">
          <Route exact path="/" component={Home} />
          <Route path="/:ep/:tag/:name" component={ThumbChooser} />
          <Route path="/createMeme/:url" component={SingleMemeMaker} />
        </div>
      </Router>
    );
  }
}

export default App;
