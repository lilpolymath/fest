import chalk from "chalk";

const log = console.log;
const error = console.error;

const logger = {
  info: (message) => {
    log(chalk.cyanBright(`[INFO] ${message}`));
  },
  pass: (message) => {
    log(chalk.green.inverse.bold(` PASS `) + chalk.greenBright(` ${message}`));
  },
  fail: (message) => {
    log(chalk.red.inverse.bold(` FAIL `) + chalk.redBright(` ${message}`));
  },
  warn: (message) => {
    log(chalk.yellowBright(`[WARN] ${message}`));
  },
  error: (message) => {
    error(chalk.redBright.bold(`[ERROR] ${message}`));
  },
  summary: (summary) => {
    log("\n" + chalk.bold.underline("TEST SUMMARY"));
    log(chalk.cyan(`Files:`));
    log(chalk.cyan(`  Total:    ${summary.totalFiles}`));
    log(chalk.red(`  Errored:  ${summary.filesWithErrors}`));

    log(chalk.cyan(`\nTests:`));
    log(chalk.cyan(`  Total:    ${summary.totalTests}`));
    log(chalk.green(`  Passed:   ${summary.passed}`));
    log(chalk.red(`  Failed:   ${summary.failed}`));

    const passRate =
      summary.totalTests > 0
        ? ((summary.passed / summary.totalTests) * 100).toFixed(2)
        : 0;
    log(chalk.cyan(`\nPass Rate: ${passRate}%`));
    log("\n");
  },
};

export default logger;
