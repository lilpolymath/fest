import path from "path";
import logger from "./logger.js";
import resolveTestFiles from "./resolveTestFiles.js";

const runTests = async () => {
  const testFiles = resolveTestFiles();

  if (testFiles.length > 0) {
    logger.info(`Found ${testFiles.length} test file(s)`);

    for (const testFile of testFiles) {
      logger.info(`Running test file: ${testFile}`);
      try {
        await import(path.resolve(testFile));
      } catch (error) {
        logger.error(
          `Failed to import test file: ${testFile}. Error: ${error.message}`
        );
      }
    }
  } else {
    logger.error("No test files found.");
    process.exit(1);
  }
};

export default runTests;
