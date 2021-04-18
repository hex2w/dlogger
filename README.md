# dlogger
A simple logger for Deno

![Screenshot](https://i.imgur.com/CaYnxHX.png)

## Basic usage

```ts
import { Logger } from "https://deno.land/x/dlogger/mod.ts"

const logger = new Logger({ format: "Logger: %s\n" })

logger.log("test")
logger.info("test")
logger.warn("test")
logger.error("test")

function myFunc (x: number) { return x * 2 }

logger.log("Strings", "One", "Two", "Three")
logger.log("Functions", (x: number) => x * 2, myFunc)
logger.info("Object", { x: 24, y: 92 })
logger.warn("Array", [ 242, "abc", { a: 1, b: 3 } ])
logger.error("Error", new Error("Something has gone wrong"))
```

This will output

![Basic Usage Output](https://i.imgur.com/BA1KGdF.png)

Note that only `logger.error()` will output the error message and it only takes one argument of the type `Error`.

## Custom format
This is using `printf` from the deno standard library and you can use your own custom format.
The default format is `"%s\n"`.

```ts
import { Logger } from "./logger.ts"

// You can also change the default format when creating the logger
const logger = new Logger({ format: "\nLogger:\n%s\n\n" })

logger.log("Hello", 123, 321)

// Or in runtime
logger.format = "I'm using a custom %s!\n"
logger.log("format")
```

This will result in

![Custom Format Output](https://i.imgur.com/vmpEEuW.png)
