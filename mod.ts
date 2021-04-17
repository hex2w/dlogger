import { colors, sprintf } from "../deps.ts"

interface LoggerOptions {
    format?: string
}

const initialOptions = { format: "%s\n" };

export class Logger {
    private _format: string

    constructor(options: LoggerOptions = initialOptions as LoggerOptions) {
        const { format } = { ...initialOptions, ...options }

        this._format = format
    }

    get format(): string {
        return this._format;
    }
    set format(_f: string) {
        this._format = _f;
    }

    log(...messages: unknown[]) {
        console.log(colors.bgBlack("LOG") + " " + colors.gray(sprintf(this.format, ...messages)));
    }
    info(...messages: unknown[]) {
        console.info(colors.bgCyan(colors.black("WARN")) + " " + colors.cyan(sprintf(this.format, ...messages)));
    }
    warn(...messages: unknown[]) {
        console.warn(colors.bgYellow(colors.black("WARN")) + " " + colors.yellow(sprintf(this.format, ...messages)));
    }
    error(...messages: unknown[]) {
        console.error(colors.bgRed("ERROR") + " " + colors.red(sprintf(this.format, ...messages)));
    }
    debug(...messages: unknown[]) {
        console.debug(colors.bgMagenta("DEBUG") + " " + colors.magenta(sprintf(this.format, ...messages)));
    }
}
