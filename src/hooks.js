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
    suites.push(currentContext);
    currentContext = null; // cleanup
  }
};

const spec = (name, cb) => {
  currentContext.specs.push({ name, cb });
};

const run = async () => {
  for (const suite of suites) {
    console.log("\n");
    logger.info(`Running suite: ${suite.name}`);

    console.group();
    for (const hook of suite.beforeAll) {
      try {
        await hook();
      } catch (error) {
        logger.error("Error in beforeAll hook", error);
      }
    }
    console.log("");
    for (const spec of suite.specs) {
      try {
        logger.info(`Executing spec: ${spec.name}`);

        for (const hook of suite.beforeEach) {
          await hook();
        }

        try {
          await spec.cb();
          logger.success(`${spec.name}`);
        } catch (error) {
          logger.error(`${spec.name}`, error);
        }

        for (const hook of suite.afterEach) {
          await hook();
        }
      } catch (error) {
        logger.error(`${spec.name}`, error);
      }
      console.log("");
    }

    for (const hook of suite.afterAll) {
      try {
        await hook();
      } catch (error) {
        logger.error("Error in afterAll hook", error);
      }
    }
    console.groupEnd();
  }
};

export { beforeAll, beforeEach, afterEach, afterAll, describe, spec, run };
