import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Switch from "./components/switch";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch />
        <Footer />
      </div>
    );
  }
}

export default App;
