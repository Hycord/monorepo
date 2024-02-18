"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Logger: () => Logger
});
module.exports = __toCommonJS(src_exports);
var import_chalk = __toESM(require("chalk"));
var Logger = class {
  title;
  constructor(title) {
    this.title = title;
  }
  _log([color = import_chalk.default, style = import_chalk.default], title = "LOG", message) {
    if (title.toLowerCase() === "date")
      title = (/* @__PURE__ */ new Date()).toLocaleString();
    console.log(
      `${color(
        import_chalk.default.bold("[") + style((this.title ? `${this.title} - ` : "") + title.toUpperCase()) + import_chalk.default.bold("]")
      )} ${message}`
    );
  }
  log(message, title = "log") {
    this._log([], title, message);
  }
  error(message, title = "error") {
    this._log([import_chalk.default.hex("#ff1a1a"), import_chalk.default.bold.underline], title, message);
  }
  warn(message, title = "warn") {
    this._log([import_chalk.default.hex("#F5A623"), import_chalk.default.underline], title, message);
  }
  success(message, title = "success") {
    this._log([import_chalk.default.hex("#29ff89"), import_chalk.default.bold], title, message);
  }
  data(message, title = "data") {
    this._log([import_chalk.default.hex("#f4017e")], title, message);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Logger
});
