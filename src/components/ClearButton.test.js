import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import ClearButton from "./ClearButton";

describe("Start App", () => {
  let buttonId;
  beforeAll(() => {
    render(<ClearButton />);
    buttonId = screen.getByTestId("existe2");
  });

  it("Se genera el boton de limpieza", () => {
    expect(buttonId).toBeDefined();
  });

  afterAll(cleanup);
});
