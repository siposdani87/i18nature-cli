# CHANGELOG

## 1.0.5 - TBD

### Changed

* Updated minimum Node.js version from 14.18.0 to 18.0.0
* Updated axios from 0.27.x to 1.13.x for security patches
* Updated TypeScript from 4.9.5 to 5.9.3
* Updated TypeScript compilation target from ES5 to ES2021
* Updated Jest from 28.1.3 to 30.2.0
* Updated ts-jest from 28.0.8 to 29.2.5
* Updated Prettier from 2.8.8 to 3.7.1
* Updated @typescript-eslint packages from 5.62.0 to 6.21.0
* Updated eslint-config-prettier from 8.10.2 to 10.1.8
* Updated webpack-cli from 5.1.4 to 6.0.1
* Updated all @types packages to latest versions
* Standardized Node version to 20 in CI/CD workflows
* Updated GitHub Actions to v4 (checkout, setup-node)
* Enhanced Jest coverage configuration with thresholds (70% for all metrics)
* Fixed coverage script to report Jest test coverage instead of eslint only
* Removed deprecated `always-auth` from .npmrc
* Removed obsolete `suppressImplicitAnyIndexErrors` from tsconfig.json

### Fixed

* Fixed bin/i18nature entry point to properly load webpack CommonJS output

### Added

* Added `.i18naturerc.json.example` template file for easier project setup
* Added `.nvmrc` file specifying Node version 20
* Added `DEPENDENCY_NOTES.md` explaining version constraints
* Added security audit step to CI pipeline
* Added test coverage reporters (text, html, lcovonly)
* Added security warning in README about .gitignore configuration
* Added CONTRIBUTING.md for contributors

### Security

* Fixed all npm audit vulnerabilities
* Added npm audit check to CI pipeline
* Added security guidance for API key protection in README

## 1.0.4 - 2024-07-19

* Use fs-extra to write file
* Fix doc format

## 1.0.3 - 2023-07-02

* Upgrade packages
* Fix typo issues
* Improve test script

## 1.0.2 - 2023-03-19

* Upgrade packages
* Fix typos in README
* Improve npm scripts

## 1.0.1 - 2023-01-10

* Upgrade packages
* Improve build process

## 1.0.0 - 2022-07-14

* Upgrade packages
* Fix typos

## 0.9.0 - 2022-06-19

* Create unit tests
* Fix some type issues
* Improve CI workflow
* Add Jest test environment

## 0.8.0 - 2022-05-17

* Fix SonarLint issues
* Use Sonar to analyze project
* Upgrade packages

## 0.7.0 - 2022-03-20

* Refactor actions
* Remove unnecessary condition

## 0.6.0 - 2022-02-13

* Add sourceMap file
* Create single file bundle 
* Setup webpack and prettier

## 0.5.0 - 2022-02-12

* Add CHANGELOG.md
* Improve project structure

## 0.4.1 - 2022-01-14

* Add missing return types

## 0.3.0 - 2021-12-04

* Upgrade packages
* Create missingProjectConfigFile handler
* Add overwriteTranslations option

## 0.2.0 - 2021-10-29

* Add I18Nature link to README.md

## 0.1.1 - 2021-10-28

* Improved condition of directory question
* Fix typo in README.md
* Add indent option to configFile writer

## 0.1.0 - 2021-10-28

* Initial release
