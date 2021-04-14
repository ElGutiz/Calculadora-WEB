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
      Donee: false,
    };
  }

  render() {
    const divisionSign = "/";
    const addSign = "+";
    const substractSign = "-";
    const multiplySign = "*";
    const decimalSign = ".";
    const moduleSign = "%";

    const { input, Donee } = this.state;

    function LenghtLimitY() {
      return <Input input={input.substring(0, 9)} />;
    }

    function LenghtLimitN() {
      return <Input input={input} />;
    }

    function FinalMessage() {
      if (Donee === true) {
        return <LenghtLimitY />;
      }
      return <LenghtLimitN />;
    }

    return (
      <div className="startName">
        <div className="calc-wrapper">
          <FinalMessage />
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + 7, Donee: false })}>
              7
            </Button>
            <Button addToInput={() => this.setState({ input: input + 8, Donee: false })}>8</Button>
            <Button addToInput={() => this.setState({ input: input + 9, Donee: false })}>9</Button>
            <Button addToInput={() => this.setState({ input: input + divisionSign, Donee: false })}>
              /
            </Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + 4, Donee: false })}>4</Button>
            <Button addToInput={() => this.setState({ input: input + 5, Donee: false })}>5</Button>
            <Button addToInput={() => this.setState({ input: input + 6, Donee: false })}>6</Button>
            <Button addToInput={() => this.setState({ input: input + multiplySign, Donee: false })}>
              x
            </Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + 1, Donee: false })}>1</Button>
            <Button addToInput={() => this.setState({ input: input + 2, Donee: false })}>2</Button>
            <Button addToInput={() => this.setState({ input: input + 3, Donee: false })}>3</Button>
            <Button addToInput={() => this.setState({ input: input + addSign, Donee: false })}>
              +
            </Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: input + decimalSign, Donee: false })}>
              .
            </Button>
            <Button addToInput={() => this.setState({ input: input + 0, Donee: false })}>0</Button>
            <Button addToInput={() => this.setState({
              input: math.evaluate(input).toString(),
              Donee: true,
            })}
            >
              =
            </Button>
            <Button addToInput={() => this.setState({
              input: input + substractSign,
              Donee: false,
            })}
            >
              -
            </Button>
          </div>
          <div className="row">
            <Button addToInput={() => this.setState({ input: math.evaluate(`-1 *${parseInt(input, 10)}`) })}>+/-</Button>
            <Button addToInput={() => this.setState({ input: input + moduleSign })}>%</Button>
            <ClearButton handleClear={() => this.setState({ input: "" })}>Erase</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default StartApp;
