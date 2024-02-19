// src/index.ts
import styles from "ansi-styles";

// src/supports-color.js
import process from "process";
import os from "os";
import tty from "tty";
function hasFlag(flag, argv = globalThis.Deno ? globalThis.Deno.args : process.argv) {
  const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
  const position = argv.indexOf(prefix + flag);
  const terminatorPosition = argv.indexOf("--");
  return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
}
var { env } = process;
var flagForceColor;
if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
  flagForceColor = 0;
} else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
  flagForceColor = 1;
}
function envForceColor() {
  if (!("FORCE_COLOR" in env)) {
    return;
  }
  if (env.FORCE_COLOR === "true") {
    return 1;
  }
  if (env.FORCE_COLOR === "false") {
    return 0;
  }
  if (env.FORCE_COLOR.length === 0) {
    return 1;
  }
  const level = Math.min(Number.parseInt(env.FORCE_COLOR, 10), 3);
  if (![0, 1, 2, 3].includes(level)) {
    return;
  }
  return level;
}
function translateLevel(level) {
  if (level === 0) {
    return false;
  }
  return {
    level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3
  };
}
function _supportsColor(haveStream, { streamIsTTY, sniffFlags = true } = {}) {
  const noFlagForceColor = envForceColor();
  if (noFlagForceColor !== void 0) {
    flagForceColor = noFlagForceColor;
  }
  const forceColor = sniffFlags ? flagForceColor : noFlagForceColor;
  if (forceColor !== void 0) {
    return forceColor;
  }
  if (sniffFlags) {
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
  }
  if ("TF_BUILD" in env && "AGENT_NAME" in env) {
    return 1;
  }
  if (haveStream && !streamIsTTY && forceColor === void 0) {
    return 0;
  }
  const min = 0;
  if (env.TERM === "dumb") {
    return min;
  }
  if (process.platform === "win32") {
    const osRelease = os.release().split(".");
    if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }
    return 1;
  }
  if ("CI" in env) {
    if ("GITHUB_ACTIONS" in env || "GITEA_ACTIONS" in env) {
      return 3;
    }
    if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "BUILDKITE", "DRONE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
      return 1;
    }
    return min;
  }
  if ("TEAMCITY_VERSION" in env) {
    return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
  }
  if (env.COLORTERM === "truecolor") {
    return 3;
  }
  if (env.TERM === "xterm-kitty") {
    return 3;
  }
  if ("TERM_PROGRAM" in env) {
    const version = Number.parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
    switch (env.TERM_PROGRAM) {
      case "iTerm.app": {
        return version >= 3 ? 3 : 2;
      }
      case "Apple_Terminal": {
        return 2;
      }
    }
  }
  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }
  if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }
  if ("COLORTERM" in env) {
    return 1;
  }
  return min;
}
function createSupportsColor(stream, options = {}) {
  const level = _supportsColor(stream, {
    streamIsTTY: stream && stream.isTTY,
    ...options
  });
  return translateLevel(level);
}
var supportsColor = {
  stdout: createSupportsColor({ isTTY: tty.isatty(1) }),
  stderr: createSupportsColor({ isTTY: tty.isatty(2) })
};
var supports_color_default = supportsColor;

// src/index.ts
function hex(data) {
  if (supports_color_default.stderr.has16m) {
    return styles.hexToRgb(data);
  }
  if (supports_color_default.stdout.has256) {
    return styles.hexToAnsi256(data);
  }
  if (supports_color_default.stdout) {
    return styles.hexToAnsi(data);
  }
}
function rgb(data) {
  if (supports_color_default.stderr.has16m) {
    return data;
  }
  if (supports_color_default.stdout.has256) {
    return styles.rgbToAnsi256(...data);
  }
  if (supports_color_default.stdout) {
    return styles.rgbToAnsi(...data);
  }
}
function parseColor(color2) {
  if (typeof color2 == "string")
    return hex(color2);
  return rgb(color2);
}
function color(c, s) {
  const color2 = parseColor(c);
  if (supports_color_default.stderr.has16m) {
    return `${styles.color.ansi16m(...color2)}${s}${styles.color.close}`;
  }
  if (supports_color_default.stdout.has256) {
    return `${styles.color.ansi256(color2)}${s}${styles.color.close}`;
  }
  if (supports_color_default.stdout) {
    return `${styles.color.ansi(color2)}${s}${styles.color.close}`;
  }
}
function background(c, s) {
  const color2 = parseColor(c);
  if (supports_color_default.stderr.has16m) {
    return `${styles.bgColor.ansi16m(...color2)}${s}${styles.bgColor.close}`;
  }
  if (supports_color_default.stdout.has256) {
    return `${styles.bgColor.ansi256(color2)}${s}${styles.bgColor.close}`;
  }
  if (supports_color_default.stdout) {
    return `${styles.bgColor.ansi(color2)}${s}${styles.bgColor.close}`;
  }
}
var Logger = class {
  title;
  constructor(title) {
    this.title = title;
  }
  _log([c = "#FFFFFF", style = "#FFFFFF"], title = "LOG", message) {
    if (title.toLowerCase() === "date")
      title = (/* @__PURE__ */ new Date()).toLocaleString();
    console.log(
      `${background(
        c,
        `[${color(c, (this.title ? `${this.title} - ` : "") + title.toUpperCase())}]`
      )} ${color(c, message)}`
    );
  }
  log(message, title = "log") {
    this._log([], title, message);
  }
  error(message, title = "error") {
    this._log(["#ff1a1a"], title, message);
  }
  warn(message, title = "warn") {
    this._log(["#F5A623"], title, message);
  }
  success(message, title = "success") {
    this._log(["#29ff89"], title, message);
  }
  data(message, title = "data") {
    this._log(["#f4017e"], title, message);
  }
};
export {
  Logger
};
