import { sync } from "glob";
import logger from "./logger.js";

const pattern = "test/**/*.test.js";

const resolveTestFiles = () => {
  try {
    const files = sync(pattern);
    return files;
  } catch (error) {
    logger.error("Failed to get test files.");
    return [];
  }
};

export default resolveTestFiles;
