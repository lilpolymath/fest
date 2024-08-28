import chalk from "chalk";

const log = console.log;
const error = console.error;

const logger = {
  info: (message) => {
    log(chalk.cyanBright(`[INFO] ${message}`));
  },
  success: (message) => {
    log(chalk.greenBright.bold(`[SUCCESS] ${message}`));
  },
  warn: (message) => {
    log(chalk.yellowBright(`[WARN] ${message}`));
  },
  error: (message) => {
    error(chalk.redBright.bold(`[ERROR] ${message}`));
  },
};

export default logger;
