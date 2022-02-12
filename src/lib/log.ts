import chalk from 'chalk';
import { GREEN_COLOR } from './config';

export const logHeader = (title: string): void => {
    console.log(chalk.hex(GREEN_COLOR).bold(title));
}

export const logError = (msg: string): void => {
    console.error(chalk.red.bold(msg));
}
