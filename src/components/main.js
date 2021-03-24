import React, { Component } from "react";
import "../styles/main.css";
import Compiler from "./compiler";

class Main extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      phone: "",
      email: "",
      location: "",
      bio: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitBio = (e) => {
    e.preventDefault();
    this.setState({
      bio: [
        this.state.bio.concat(this.state.fullName),
        this.state.bio.concat(this.state.phone),
        this.state.bio.concat(this.state.email),
        this.state.bio.concat(this.state.location),
      ],
    });
    console.log(this.state.bio);
  };

  render() {
    const { fullName, bio } = this.state;
    return (
      <div className="parent-wrapper">
        <div className="main-wrapper">
          <div className="bio-wrapper">
            <div>
              <form onSubmit={this.onSubmitBio} class="bio">
                <input
                  onChange={this.handleChange}
                  value={this.state.fullName}
                  name="fullName"
                  className="fname"
                  type="text"
                  placeholder="Full Name"
                />
                <input
                  onChange={this.handleChange}
                  value={this.state.phone}
                  name="phone"
                  className="bio-dets"
                  type="text"
                  placeholder="Phone"
                />
                <input
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  className="bio-dets"
                  type="email"
                  placeholder="Email"
                />
                <input
                  onChange={this.handleChange}
                  value={this.state.location}
                  name="location"
                  className="bio-dets"
                  type="text"
                  placeholder="Location"
                />
                <button type="submit" className="bio-btn">
                  Save
                </button>
              </form>
            </div>
            <Compiler bio={bio} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
