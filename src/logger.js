import chalk from "chalk";

const log = console.log;
const error = console.error;

const logger = {
  info: (message) => {
    log(chalk.whiteBright("INFO: " + message));
  },
  success: (message) => {
    log(chalk.green("SUCCESS: " + message));
  },
  error: (message) => {
    error(chalk.red("ERROR: " + message));
  },
};

export default logger;
