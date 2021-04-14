import React, { Component } from "react";
import "../Styles/input_style.css";

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
