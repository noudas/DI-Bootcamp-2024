import React, { Component } from "react";

class BuggyCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => {
      if (prevState.count + 1 === 5) {
        throw new Error("I crashed!");
      }
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div
        onClick={this.handleClick}>
        {this.state.count}
      </div>
    );
  }
}

export default BuggyCounter;
