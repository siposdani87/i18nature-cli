import chalk from 'chalk';
import { GREEN_COLOR } from './config';

export const logHeader = (title: string): void => {
    return console.log(chalk.hex(GREEN_COLOR).bold(title));
};

export const logError = (msg: string): void => {
    return console.error(chalk.red.bold(msg));
};
