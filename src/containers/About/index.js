import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <p>About</p>
        <Link to={`${this.props.match.url}/rendering`}>
          Rendering with React
        </Link>
      </div>
    );
  }
}

export default About;
