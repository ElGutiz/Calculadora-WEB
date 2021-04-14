import React from "react";
import * as math from "mathjs";

import Button from "../components/Button";
import ClearButton from "../components/ClearButton";
import Input from "../components/Input";

import "../Styles/startName_style.css";

class StartApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
    };
  }

  handleEqual() {
    this.setState({ input: math.evaluate(this.state.input) });
  }

  render() {
    const divisionSign = "/";
    const addSign = "+";
    const substractSign = "-";
    const multiplySign = "*";
    const decimalSign = ".";
    const equalSign = "=";
    const { input } = this.state;
    return (
      <div className="startName">
        <div className="calc-wrapper">
          <Input input={input} />
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + 7 })}>7</Button>
            <Button addToInput={() => this.setState({ input: input + 8 })}>8</Button>
            <Button addToInput={() => this.setState({ input: input + 9 })}>9</Button>
            <Button addToInput={() => this.setState({ input: input + divisionSign })}>
              /
            </Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + 4 })}>4</Button>
            <Button addToInput={() => this.setState({ input: input + 5 })}>5</Button>
            <Button addToInput={() => this.setState({ input: input + 6 })}>6</Button>
            <Button addToInput={() => this.setState({ input: input + multiplySign })}>x</Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + 1 })}>1</Button>
            <Button addToInput={() => this.setState({ input: input + 2 })}>2</Button>
            <Button addToInput={() => this.setState({ input: input + 3 })}>3</Button>
            <Button addToInput={() => this.setState({ input: input + addSign })}>+</Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + decimalSign })}>.</Button>
            <Button addToInput={() => this.setState({ input: input + 0 })}>0</Button>
            <Button addToInput={() => this.setState({ input: input + equalSign })}>=</Button>
            <Button addToInput={() => this.setState({ input: input + substractSign })}>-</Button>
          </div>
          <div className="row">
            <ClearButton>Erase</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default StartApp;
