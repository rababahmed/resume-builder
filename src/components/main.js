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
      cName: "",
      cDes: "",
      cStd: "",
      cEnd: "",
      cDetails: "",
      eName: "",
      eDeg: "",
      eStd: "",
      eEnd: "",
      bio: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmitBio = this.onSubmitBio.bind(this);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ bio: [] });
    this.setState({
      [name]: value,
    });
    this.refs.sbBtn.removeAttribute("disabled");
  };

  onSubmitBio = (e) => {
    e.preventDefault();
    this.setState({
      bio: [
        this.state.bio.concat(this.state.fullName),
        this.state.bio.concat(this.state.phone),
        this.state.bio.concat(this.state.email),
        this.state.bio.concat(this.state.location),
        this.state.bio.concat(this.state.cName),
        this.state.bio.concat(this.state.cDes),
        this.state.bio.concat(this.state.cStd),
        this.state.bio.concat(this.state.cEnd),
        this.state.bio.concat(this.state.cDetails),
        this.state.bio.concat(this.state.eName),
        this.state.bio.concat(this.state.eDeg),
        this.state.bio.concat(this.state.eStd),
        this.state.bio.concat(this.state.eEnd),
      ],
    });
    console.log(this.state.bio);
    this.refs.sbBtn.setAttribute("disabled", "disabled");
  };

  render() {
    const { fullName, bio } = this.state;
    return (
      <div>
        <div className="parent-wrapper">
          <div className="main-wrapper">
            <div className="bio-wrapper">
              <div>
                <form onSubmit={this.onSubmitBio} class="bio">
                  <input
                    value={this.state.fullName}
                    onChange={this.handleChange}
                    name="fullName"
                    className="bio-dets"
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
                  <input
                    onChange={this.handleChange}
                    value={this.state.cName}
                    name="cName"
                    className="bio-dets"
                    type="text"
                    placeholder="Company Name"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.cDes}
                    name="cDes"
                    className="bio-dets"
                    type="text"
                    placeholder="Designation"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.cStd}
                    name="cStd"
                    className="bio-dets"
                    type="text"
                    placeholder="Date Started"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.cEnd}
                    name="cEnd"
                    className="bio-dets"
                    type="text"
                    placeholder="Date Ended"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.cDetails}
                    name="cDetails"
                    className="bio-dets"
                    type="text"
                    placeholder="Job Details"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.eName}
                    name="eName"
                    className="bio-dets"
                    type="text"
                    placeholder="Instituion Name"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.eDeg}
                    name="eDeg"
                    className="bio-dets"
                    type="text"
                    placeholder="Degree Details"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.eStd}
                    name="eStd"
                    className="bio-dets"
                    type="text"
                    placeholder="Year Started"
                  />
                  <input
                    onChange={this.handleChange}
                    value={this.state.eEnd}
                    name="eEnd"
                    className="bio-dets"
                    type="text"
                    placeholder="Year Ended"
                  />

                  <button ref="sbBtn" type="submit" className="bio-btn">
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Compiler data={this.state} />
        </div>
      </div>
    );
  }
}

export default Main;
