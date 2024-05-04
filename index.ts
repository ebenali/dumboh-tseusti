/** The wassup app */

// Path: index.js

import { log, error } from "node:console"
import { default as chalk } from "chalk";

async function main() {
    log(chalk.red('Wassup, World!'));
}

main().catch(error);
