import validate from "../src/assertions.js";
import {
  beforeAll,
  describe,
  spec,
  beforeEach,
  afterAll,
  afterEach,
} from "../src/hooks.js";

describe("Test Suite 1", () => {
  beforeAll(() => {
    console.log("Setup before all tests");
  });

  beforeEach(() => {
    console.log("Setup before each test");
  });

  afterEach(() => {
    console.log("Cleanup after each test");
  });

  afterAll(() => {
    console.log("Cleanup after all tests");
  });

  spec("should fail", () => {
    validate(1 + 1).isEqual(3);
    validate({ a: 1 }).isEqual({ a: 1 });
  });

  spec("should pass", () => {
    validate({ a: 1 }).isEqual({ a: 1 });
  });
});

describe("Test Suite 2", () => {
  spec("should pass", () => {
    validate(3).isNotEqual({ a: 1 });
  });
});
