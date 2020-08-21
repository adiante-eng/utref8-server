/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { getConfiguration } from "./Configuration";
import { Parser } from "./Parser";
import { expect } from "chai";

const { REF, SPACE, TAG } = getConfiguration();

describe("Parser", () => {
  it("finds a single tag", () => {
    const { tags } = Parser.parse("", `This ${TAG}foo defines a tag with name 'foo'`);
    expect(tags).to.have.lengthOf(1);
    expect(tags[0].name).to.equal("foo");
  });

  it("finds a single ref", () => {
    const { refs } = Parser.parse("", `This ${REF}foo references the tag with name 'foo'`);
    expect(refs).to.have.lengthOf(1);
    expect(refs[0].name).to.equal("foo");
  });

  it("finds multiple tags and refs", () => {
    const text = `
      # Longer Text
  
      This ${REF}foo references the tag with name 'foo'.
      The tag is defined later: ${TAG}foo. But there are more tags in the ${TAG}same${SPACE}line.
      `;
    const { refs, tags } = Parser.parse("", text);
    expect(tags).to.have.lengthOf(2);
    expect(tags[0].name).to.equal("foo");
    expect(tags[1].name).to.equal(`same${SPACE}line`);

    expect(refs).to.have.lengthOf(1);
    expect(refs[0].name).to.equal("foo");
  });
});
