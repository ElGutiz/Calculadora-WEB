import React from "react";

class ClearButton extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div role="presentation" className="clear-button" onClick={this.props.handleClear}>
        {this.props.children}
      </div>
    );
  }
}

export default ClearButton;
