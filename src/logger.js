import chalk from "chalk";

const log = console.log;
const error = console.error;

const logger = {
  info: (message) => {
    log(chalk.whiteBright(message));
  },
  success: (message) => {
    log(chalk.green(message));
  },
  error: (message) => {
    error(chalk.red(message));
  },
};

export default logger;
