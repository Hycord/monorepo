// src/index.ts
import chalk from "chalk";
var Logger = class {
  title;
  constructor(title) {
    this.title = title;
  }
  _log([color = chalk, style = chalk], title = "LOG", message) {
    if (title.toLowerCase() === "date")
      title = (/* @__PURE__ */ new Date()).toLocaleString();
    console.log(
      `${color(
        chalk.bold("[") + style((this.title ? `${this.title} - ` : "") + title.toUpperCase()) + chalk.bold("]")
      )} ${message}`
    );
  }
  log(message, title = "log") {
    this._log([], title, message);
  }
  error(message, title = "error") {
    this._log([chalk.hex("#ff1a1a"), chalk.bold.underline], title, message);
  }
  warn(message, title = "warn") {
    this._log([chalk.hex("#F5A623"), chalk.underline], title, message);
  }
  success(message, title = "success") {
    this._log([chalk.hex("#29ff89"), chalk.bold], title, message);
  }
  data(message, title = "data") {
    this._log([chalk.hex("#f4017e")], title, message);
  }
};
export {
  Logger
};
