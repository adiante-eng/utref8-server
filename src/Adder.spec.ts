/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { expect } from "chai";
import { Adder } from "./Adder";

describe("Adder", () => {
  it("adds two numbers", () => {
    expect(Adder.add(1, 2)).to.equal(3);
  });
  it("adds all numbers", () => {
    expect(Adder.addAll(1, 2, 3)).to.equal(6);
  });
});
