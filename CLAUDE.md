# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

i18nature-cli is a Node.js/TypeScript CLI tool for initializing, uploading, and downloading translation files to the I18Nature localization platform (https://app.i18nature.com). Published as an npm package (`i18nature-cli`).

## Commands

```bash
npm test                  # Run all tests (Jest)
npx jest path/to/file     # Run a single test file
npx jest --testNamePattern="pattern"  # Run tests matching a pattern
npm run lint              # ESLint + TypeScript type check (no emit)
npm run eslint            # ESLint only
npm run format            # Prettier formatting
npm run build             # Full build (clean → format → lint → coverage → webpack)
npm run coverage          # Jest coverage + ESLint coverage report
```

## Code Style

- **Prettier:** 4-space indentation, single quotes, trailing commas, semicolons
- **ESLint:** extends `eslint:recommended` + `@typescript-eslint/recommended` + `prettier`
- `@typescript-eslint/no-explicit-any` is allowed (turned off)
- TypeScript strict mode is enabled
- Target: ES2021, module: CommonJS

## Architecture

**Entry flow:** `bin/i18nature` shell script → `src/index.ts` (exports default) → `src/cli.ts`

`cli.ts` orchestrates the full lifecycle:
1. `parseArgumentsIntoOptions()` — parses CLI args via yargs into an `Options` object
2. `promptForMissingOptions()` — fills gaps via inquirer interactive prompts
3. `actionHandler()` — routes to the appropriate action (init/upload/download) which returns `ListrTask[]`
4. `runTasks()` — executes the task list via Listr with progress display

**Three layers:**
- **`src/actions/`** — Command handlers (`init.ts`, `upload.ts`, `download.ts`). Each returns `ListrTask[]` with nested subtasks. They call the I18Nature API via axios and use lib utilities.
- **`src/lib/`** — Shared utilities: `config.ts` (constants, axios interceptor), `types.ts` (interfaces/enums), `projectConfig.ts` (read/write `.i18naturerc.json`), `fileInfo.ts` (glob-based file discovery, `%language`/`%locale` path placeholders), `task.ts` (Listr task builders), `log.ts` (chalk-colored logging).
- **`src/cli.ts`** — CLI argument parsing and orchestration (the glue).

**Key types** (`src/lib/types.ts`): `Action` enum, `Options`, `TranslationFile`, `ProjectConfig`, `FileInfo`.

## Testing

- Jest 30 with ts-jest, test environment: node
- Tests are colocated with source as `*.spec.ts` files in the same directory
- `jest.setup.ts` globally mocks axios, `fs.writeFileSync`, `fs.ensureFileSync`, and console methods. Import `mockedAxios` from `jest.setup` for axios mocking in tests.
- Coverage threshold: 70% minimum (branches, functions, lines, statements)
- Webpack bundles to `dist/index.js` (CommonJS, node target, externals excluded)

## Git Workflow

- `master` is the main/release branch (triggers npm publish via CI)
- `develop` is the development branch
- CI runs on push to master/develop and on pull requests (Node 20, ubuntu-latest)
- `.i18naturerc.json` contains API keys — must be in `.gitignore`
