import path from "path";
import logger from "./logger.js";
import { getSuites, setSuites } from "./hooks.js";
import resolveTestFiles from "./resolveTestFiles.js";

const run = async () => {
  const suites = getSuites();

  let stats = {
    total: 0,
    failed: 0,
  };

  for (const suite of suites) {
    try {
      console.log("\n");
      logger.info(`Running suite: ${suite.name}`);
      console.group();

      // Run beforeAll hooks
      for (const hook of suite.beforeAll) await hook();

      console.log("");
      for (const spec of suite.specs) {
        try {
          logger.info(`Executing spec: ${spec.name}`);

          // Run beforeEach hooks
          for (const hook of suite.beforeEach) await hook();

          try {
            await spec.cb();
            logger.pass(`${spec.name}`);
          } catch (error) {
            stats.failed += 1;
            logger.fail(`${spec.name}`, error);
          }

          // Run afterEach hooks
          for (const hook of suite.afterEach) await hook();
        } catch (error) {
          logger.fail(`${spec.name}`, error);
        }
        stats.total += 1;
        console.log("");
      }

      // Run afterAll hooks
      for (const hook of suite.afterAll) await hook();

      console.groupEnd();
    } catch (error) {
      logger.error("Error during suite execution", error);
    } finally {
      console.groupEnd();
    }
  }

  return stats;
};

const main = async () => {
  const testFiles = resolveTestFiles();

  const summary = {
    totalFiles: testFiles.length,
    filesWithErrors: 0,
    totalTests: 0,
    passed: 0,
    failed: 0,
  };

  if (testFiles.length > 0) {
    logger.info(`Found ${testFiles.length} test file(s)`);

    for (const testFile of testFiles) {
      logger.info(`Running test file: ${testFile}`);
      try {
        setSuites([]);
        await import(path.resolve(testFile));
        const { total, failed } = await run();
        summary.totalTests += total;
        summary.failed += failed;
        summary.passed = summary.totalTests - summary.failed;
      } catch (error) {
        logger.error(
          `Failed to import test file: ${testFile}. Error: ${error.message}`
        );
        summary.filesWithErrors++;
      }
    }
  } else {
    logger.error("No test files found.");
    process.exit(1);
  }

  logger.summary(summary);
};
export default main;
