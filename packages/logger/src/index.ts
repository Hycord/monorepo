//@ts-ignore

import styles from "./ansi-styles.js";
//@ts-ignore
import supportsColor from "./supports-color.js";

type Color = string | [number, number, number];

function hex(data: string) {
  if (supportsColor.stderr.has16m) {
    return styles.hexToRgb(data);
  }
  if (supportsColor.stdout.has256) {
    return styles.hexToAnsi256(data);
  }
  if (supportsColor.stdout) {
    return styles.hexToAnsi(data);
  }
}

function rgb(data: [number, number, number]) {
  if (supportsColor.stderr.has16m) {
    return data;
  }
  if (supportsColor.stdout.has256) {
    return styles.rgbToAnsi256(...data);
  }
  if (supportsColor.stdout) {
    return styles.rgbToAnsi(...data);
  }
}

function parseColor(color: Color) {
  if (typeof color == "string") return hex(color);
  return rgb(color);
}

function color(c: Color, s: string) {
  const color = parseColor(c);

  if (supportsColor.stderr.has16m) {
    return `${styles.color.ansi16m(...(color as [number, number, number]))}${s}${styles.color.close}`;
  }
  if (supportsColor.stdout.has256) {
    return `${styles.color.ansi256(color as number)}${s}${styles.color.close}`;
  }
  if (supportsColor.stdout) {
    return `${styles.color.ansi(color as number)}${s}${styles.color.close}`;
  }
}

function background(c: Color, s: string) {
  const color = parseColor(c);

  if (supportsColor.stderr.has16m) {
    return `${styles.bgColor.ansi16m(...(color as [number, number, number]))}${s}${styles.bgColor.close}`;
  }
  if (supportsColor.stdout.has256) {
    return `${styles.bgColor.ansi256(color as number)}${s}${styles.bgColor.close}`;
  }
  if (supportsColor.stdout) {
    return `${styles.bgColor.ansi(color as number)}${s}${styles.bgColor.close}`;
  }
}

export class Logger {
  private title?: string;
  constructor(title?: string) {
    this.title = title;
  }

  _log(
    [c = "#FFFFFF", style = "#FFFFFF"]: Color[],
    title = "LOG",
    message: unknown
  ) {
    if (title.toLowerCase() === "date") title = new Date().toLocaleString();
    console.log(
      `${background(
        c,
        `[${color(c, (this.title ? `${this.title} - ` : "") + title.toUpperCase())}]`
      )} ${color(c, message as any)}`
    );
  }

  log(message: unknown, title = "log") {
    this._log([], title, message);
  }

  error(message: unknown, title = "error") {
    this._log(["#ff1a1a"], title, message);
  }

  warn(message: unknown, title = "warn") {
    this._log(["#F5A623"], title, message);
  }

  success(message: unknown, title = "success") {
    this._log(["#29ff89"], title, message);
  }

  data(message: unknown, title = "data") {
    this._log(["#f4017e"], title, message);
  }
}
