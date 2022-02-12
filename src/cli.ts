import axios from 'axios';
import fs from 'fs';
import inquirer from 'inquirer';
import path from 'path';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
    BASE_URL,
    CURRENT_WORK_DIR,
    DEBUG_BASE_URL,
    DEBUG_FILENAME,
    DEFAULT_API_KEY,
    FILENAME,
} from './lib/config';
import { Action, Options } from './lib/model';
import { init, upload, download } from './actions';

const actionFromString = (action: string): Action => {
    switch (action) {
        case 'init':
            return Action.INIT;
        case 'upload':
            return Action.UPLOAD;
        case 'download':
            return Action.DOWNLOAD;
        default:
            return Action.NONE;
    }
};

const parseArgumentsIntoOptions = async (
    rawArgs: string[],
): Promise<Options> => {
    const argv = await yargs(hideBin(rawArgs))
        .epilogue(
            'for more information, find our website at https://i18nature.com',
        )
        .usage(
            'Command-line tool of I18Nature localization tool.\n\nUsage: $0 <cmd> [args]',
        )
        .command(
            'init [project_api_key]',
            'Create .i18naturerc.json file.',
            (yargs) => {
                return yargs.positional('project_api_key', {
                    describe: 'project to bind on',
                    default: DEFAULT_API_KEY,
                });
            },
            (argv) => {
                if (argv.verbose) {
                    console.info(
                        `create config file of: ${argv.project_api_key}`,
                    );
                }
            },
        )
        .command(
            'upload',
            'Upload translation files.',
            (yargs) => {
                return yargs;
            },
            (argv) => {
                if (argv.verbose) {
                    console.info(`upload translation file`);
                }
            },
        )
        .command(
            'download',
            'Download translation files.',
            (yargs) => {
                return yargs;
            },
            (argv) => {
                if (argv.verbose) {
                    console.info(`download translation file`);
                }
            },
        )
        .options({
            help: {
                type: 'boolean',
                alias: 'h',
                description: 'Show help',
                global: false,
            },
            verbose: {
                type: 'boolean',
                alias: 'v',
                description: 'Run with verbose logging',
                global: true,
            },
            yes: {
                type: 'boolean',
                alias: 'y',
                description: 'Skip prompts',
                global: true,
            },
            debug: {
                type: 'boolean',
                description: 'Debug mode',
                global: true,
            },
            overwriteTranslations: {
                type: 'boolean',
                description: 'Overwrite translation files on upload',
                global: true,
            },
        }).argv;

    const configFileName = argv.debug ? DEBUG_FILENAME : FILENAME;
    const configFilePath = path.join(CURRENT_WORK_DIR, configFileName);

    return {
        projectApiKey: argv.project_api_key,
        skipPrompts: argv.yes || false,
        verbose: argv.verbose || false,
        debug: argv.debug || false,
        overwriteConfigFile: false,
        overwriteTranslations: argv.overwriteTranslations || false,
        configFileName,
        configFilePath,
        directory: '',
        existsProjectConfigFile: fs.existsSync(configFilePath),
        action: actionFromString(argv._[0] as string),
    };
};

const promptForMissingOptions = async (options: Options): Promise<Options> => {
    if (options.skipPrompts) {
        return options;
    }

    const questions = [];
    const isDefaultApiKey = options.projectApiKey === DEFAULT_API_KEY;

    if (options.action === Action.INIT && options.existsProjectConfigFile) {
        questions.push({
            type: 'confirm',
            name: 'overwriteConfigFile',
            message: `Overwrite existing ${options.configFileName} file?`,
            default: false,
        });
    }

    if (options.action === Action.INIT) {
        let projectConfig = {
            project_api_key: options.projectApiKey,
        };
        if (options.existsProjectConfigFile) {
            projectConfig = JSON.parse(
                fs.readFileSync(options.configFilePath, 'utf8'),
            );
        }
        questions.push({
            type: 'input',
            name: 'project_api_key',
            message: 'Project API key?',
            default: projectConfig.project_api_key,
            when: (answers: any) =>
                answers.overwriteConfigFile || isDefaultApiKey,
        });

        questions.push({
            type: 'input',
            name: 'directory',
            message: 'Relative path of translation files directory?',
            default: 'example/locales',
            when: (answers: any) =>
                answers.overwriteConfigFile || !options.existsProjectConfigFile,
        });
    }

    const answers = await inquirer.prompt(questions);
    return {
        ...options,
        projectApiKey:
            options.projectApiKey !== DEFAULT_API_KEY
                ? options.projectApiKey
                : answers.project_api_key,
        overwriteConfigFile:
            answers.overwriteConfigFile || !options.existsProjectConfigFile,
        directory: options.directory || answers.directory,
    };
};

const actionHandler = async (options: Options): Promise<void> => {
    axios.defaults.baseURL = options.debug ? DEBUG_BASE_URL : BASE_URL;

    switch (options.action) {
        case Action.INIT:
            return await init(options);
        case Action.UPLOAD:
            return await upload(options);
        case Action.DOWNLOAD:
            return await download(options);
        default:
            break;
    }
};

export default async (args: string[]): Promise<void> => {
    let options = await parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    await actionHandler(options);
};
