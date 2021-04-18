import { colors, printf } from "./deps.ts"

interface LoggerOptions {
    format?: string
    time?: boolean
}

const defaultOptions = { format: "%s\n" }

export class Logger {
    private _format: string

    constructor(options: LoggerOptions = defaultOptions as LoggerOptions) {
        const { format } = { ...defaultOptions, ...options }
        this._format = format
    }


    get format(): string {
        return this._format
    }

    set format(_f: string) {
        this._format = _f
    }

    log(message: string | number, ...args: unknown[]) {
        message = colors.gray(`${message}`)

        if (args.length > 0) message += " | " + JSON.stringify(args)

        printf(colors.bgBlack("LOG") + " ")
        printf(this.format, message)
    }

    info(message: string | number, ...args: unknown[]) {
        message = colors.cyan(`${message}`)

        if (args.length > 0) message += " | " + JSON.stringify(args)

        printf(colors.bgCyan(colors.black("INFO")) + " ")
        printf(this.format, message)
    }

    warn(message: string | number, ...args: unknown[]) {
        message = colors.yellow(`${message}`)

        if (args.length > 0) message += " | " + JSON.stringify(args)

        printf(colors.bgYellow(colors.black("WARN")) + " ")
        printf(this.format, message)
    }

    error(message: string | number, error?: Error) {
        message = colors.red(`${message}`)

        if (error) message += " | " + colors.red(error.message)

        printf(colors.bgRed("ERROR") + " ")
        printf(this.format, message)
    }
}
