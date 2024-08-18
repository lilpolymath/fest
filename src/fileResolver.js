import * as glob from "glob";
import logger from "./logger.js";

const pattern = "test/**/*.test.js";

const fileResolver = () => {
  try {
    const files = glob.sync(pattern);

    if (files.length > 0) {
      logger.info(`INFO: Found ${files.length} test file(s)`);
    } else {
      logger.info("ERROR: No test files found");
    }
  } catch (error) {
    logger.error("ERROR: Failed to get test files");
  }
};

export default fileResolver;
