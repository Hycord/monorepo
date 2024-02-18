import chalk from 'chalk';
export class Logger {
  private title?: string;
  constructor(title?: string) {
    this.title = title;
  }

  _log(
    [color = chalk, style = chalk]: (typeof chalk)[],
    title = 'LOG',
    message: unknown,
  ) {
    if (title.toLowerCase() === 'date') title = new Date().toLocaleString();
    console.log(
      `${color(
        chalk.bold('[') +
          style((this.title ? `${this.title} - ` : '') + title.toUpperCase()) +
          chalk.bold(']'),
      )} ${message}`,
    );
  }

  log(message: unknown, title = 'log') {
    this._log([], title, message);
  }

  error(message: unknown, title = 'error') {
    this._log([chalk.hex('#ff1a1a'), chalk.bold.underline], title, message);
  }

  warn(message: unknown, title = 'warn') {
    this._log([chalk.hex('#F5A623'), chalk.underline], title, message);
  }

  success(message: unknown, title = 'success') {
    this._log([chalk.hex('#29ff89'), chalk.bold], title, message);
  }

  data(message: unknown, title = 'data') {
    this._log([chalk.hex('#f4017e')], title, message);
  }
}
