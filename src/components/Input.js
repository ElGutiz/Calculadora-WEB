import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="input">
        {this.props.input}
      </div>
    );
  }
}

export default Input;
