# dlogger
A simple logger for Deno

![Screenshot](https://i.imgur.com/Br7dD5D.png)

## Basic usage

```ts
import { Logger } from "https://deno.land/x/dlogger/mod.ts

const logger = new Logger()

logger.log("This is a simple log")
logger.info("You can log an object", { name: "John Doe", city: "New York" });
logger.warn("This is a", "warning")
logger.error("An exception occured", new Error("Error"));
```

## Custom format
This is using `printf` from the deno standard library and you can use your own custom format.
The default format is `"%s"`.

```ts
// You can use it inside the message
console.log("I'm using a %s format!", "custom")

// Output: I'm using a custom format!
```

```ts
// You can also change the default format when creating the logger
const logger = new Logger({ format: "Logger says: %s, %d" })

logger.log("Hello", 123, 321)

// Output: LOG Logger says: Hello 123, 321!

// Or in runtime
logger.format = "I'm using a custom %s!"
logger.log("format")

// Output: I'm using a custom format!
```
