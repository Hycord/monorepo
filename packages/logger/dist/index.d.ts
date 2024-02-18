import chalk from 'chalk';

declare class Logger {
    private title?;
    constructor(title?: string);
    _log([color, style]: (typeof chalk)[], title: string | undefined, message: unknown): void;
    log(message: unknown, title?: string): void;
    error(message: unknown, title?: string): void;
    warn(message: unknown, title?: string): void;
    success(message: unknown, title?: string): void;
    data(message: unknown, title?: string): void;
}

export { Logger };
