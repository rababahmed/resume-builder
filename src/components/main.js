import React, { Component } from "react";
import Bio from "./bio";
import "../styles/main.css";

class Main extends Component {
  render() {
    return (
      <div className="parent-wrapper">
        <div className="main-wrapper">
          <div className="bio-wrapper">
            <Bio />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
