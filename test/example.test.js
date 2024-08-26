import validate from "../src/assertions.js";
import {
  beforeAll,
  describe,
  spec,
  beforeEach,
  afterAll,
  afterEach,
} from "../src/hooks.js";

describe("Example Test Suite 1", () => {
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

  spec("should test something", () => {
    validate(1 + 1).isEqual(2);
    validate({ a: 1 }).isEqual({ a: 1 });
  });
});
