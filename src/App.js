import React, { Component } from "react";

import "./App.css";

import Header from "./Components/Layouts/Header";
import Main from "./Components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Main className="mt-3" />
        </div>
      </div>
    );
  }
}

export default App;