import * as math from "mathjs";
import { cleanup } from "@testing-library/react";

const num1 = 34;
const num2 = 35;
const stringOperation = "7*8-9+12/4";

describe("Operaciones", () => {
  it("Suma", () => {
    expect(math.evaluate(num1 + num2)).toEqual(69);
  });

  it("Resta", () => {
    expect(math.evaluate(num1 - num2)).toEqual(-1);
  });

  it("Division", () => {
    expect(math.evaluate(num1 / num2)).toBeLessThan(1);
  });

  it("Multiplicacion", () => {
    expect(math.evaluate(num1 * num2)).toEqual(1190);
  });

  it("Mod", () => {
    expect(math.evaluate(num2 % num1)).toEqual(1);
  });

  it("Operacion de una cadena", () => {
    expect(math.evaluate(stringOperation)).toEqual(50);
  });

  afterAll(cleanup);
});
