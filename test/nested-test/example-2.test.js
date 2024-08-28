import validate from "../../src/assertions.js";
import { describe, spec } from "../../src/hooks.js";

describe("Test Suite 3", () => {
  spec("should pass", () => {
    validate([]).isTruthy();
  });
});
