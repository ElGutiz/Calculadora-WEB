import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Input from "./Input";

describe("Start App", () => {
  let buttonId;
  beforeAll(() => {
    render(<Input />);
    buttonId = screen.getByTestId("existe3");
  });

  it("Se genera el espacio para mostrar el texto.", () => {
    expect(buttonId).toBeDefined();
  });

  afterAll(cleanup);
});
