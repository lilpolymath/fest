import logger from "./logger.js";

const createFreshContext = () => ({
  name: "",
  specs: [],
  beforeAll: [],
  afterAll: [],
  beforeEach: [],
  afterEach: [],
});

let currentContext = null;
let suites = [];

const beforeAll = (cb) => {
  if (currentContext) {
    currentContext.beforeAll.push(cb);
  }
};

const beforeEach = (cb) => {
  if (currentContext) {
    currentContext.beforeEach.push(cb);
  }
};

const afterEach = (cb) => {
  if (currentContext) {
    currentContext.afterEach.push(cb);
  }
};

const afterAll = (cb) => {
  if (currentContext) {
    currentContext.afterAll.push(cb);
  }
};

const describe = (name, cb) => {
  try {
    currentContext = createFreshContext();
    currentContext.name = name;
    cb();
  } catch (error) {
    logger.error("Failed to run test suite");
  } finally {
    currentContext = null; // cleanup
  }
};

const spec = (name, cb) => {
  currentContext.specs.push({ name, cb });
};

export { beforeAll, beforeEach, afterEach, afterAll, describe, spec };
