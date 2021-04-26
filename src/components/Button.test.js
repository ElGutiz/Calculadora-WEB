import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import Button from "./Button";

describe("Start App", () => {
  let buttonId;
  beforeAll(() => {
    render(<Button />);
    buttonId = screen.getByTestId("existe1");
  });

  it("Se generan los botones numerales y de signos", () => {
    expect(buttonId).toBeDefined();
  });

  afterAll(cleanup);
});
