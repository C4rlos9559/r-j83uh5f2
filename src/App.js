import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { len: 0 };
  }

  count = (event) => {
    this.setState({ len: event.target.value.length });
  };
  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.count}></textarea>
        <div className="counter">{this.state.len}</div>
      </div>
    );
  }
}

export default App;
