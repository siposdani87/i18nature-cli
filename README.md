# I18Nature-CLI

[![Version](https://img.shields.io/npm/v/i18nature-cli.svg?style=square)](https://www.npmjs.com/package/i18nature-cli)
[![Download](https://img.shields.io/npm/dt/i18nature-cli.svg?style=square)](https://www.npmjs.com/package/i18nature-cli)
[![License](https://img.shields.io/npm/l/i18nature-cli.svg?style=square)](./LICENSE)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=siposdani87_i18nature-cli&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=siposdani87_i18nature-cli)

Command-line tool to initialize, upload and download translation files to I18Nature localization platform ([https://i18nature.com](https://i18nature.com)).

## Installation

> **Requires Node.js >= 18.0.0**

```bash
# Install globally
npm install -g i18nature-cli

# Or run directly via npx
npx i18nature-cli --help

# Or via npm init
npm init i18nature-cli --help
```

## Quick Start

```bash
# 1. Initialize your project config
i18nature init <YOUR_API_KEY>

# 2. Upload translation files
i18nature upload

# 3. Download translation files
i18nature download
```

## Commands

| Command                          | Description                        |
| -------------------------------- | ---------------------------------- |
| `i18nature init [project_api_key]` | Create `.i18naturerc.json` file  |
| `i18nature upload`               | Upload translation files           |
| `i18nature download`             | Download translation files         |

## Options

| Option                    | Type    | Description                            |
| ------------------------- | ------- | -------------------------------------- |
| `-h`, `--help`            | boolean | Show help                              |
| `--version`               | boolean | Show version number                    |
| `-v`, `--verbose`         | boolean | Run with verbose logging               |
| `-y`, `--yes`             | boolean | Skip prompts                           |
| `--debug`                 | boolean | Debug mode                             |
| `--overwriteTranslations` | boolean | Overwrite translation files on upload  |

## Creating a config file for I18Nature project

When creating a config file, you may provide or generate a `api_key` of your project from [I18Nature](https://i18nature.com). With CLI, you can initialize `.i18naturerc.json` config file. This file contains your list of your translation files. The translation file has many properties like (`id, name, filename, extension, locales, default_locale, wrapper_key, directory`).

🔴 **IMPORTANT**: You can use `%language` and `%locale` placeholder keys in `filename, wrapper_key, directory` properties.

🔴 **SECURITY**: Add `.i18naturerc.json` to your `.gitignore` file to avoid accidentally committing your API key to version control.

```gitignore
# .gitignore
.i18naturerc.json
```

<details>
<summary>Supported locales (click to expand)</summary>

`sq-AL`, `ar-DZ`, `ar-BH`, `ar-EG`, `ar-IQ`, `ar-JO`, `ar-KW`, `ar-LB`, `ar-LY`, `ar-MA`,
`ar-OM`, `ar-QA`, `ar-SA`, `ar-SD`, `ar-SY`, `ar-TN`, `ar-AE`, `ar-YE`, `be-BY`, `bn-IN`,
`bn-BD`, `bg-BG`, `ca-ES`, `zh-CN`, `zh-HK`, `zh-SG`, `zh-TW`, `hr-HR`, `cs-CZ`, `da-DK`,
`nl-BE`, `nl-NL`, `en-AU`, `en-CA`, `en-IN`, `en-IE`, `en-MT`, `en-NZ`, `en-PH`, `en-SG`,
`en-ZA`, `en-GB`, `en-US`, `et-EE`, `fi-FI`, `fr-BE`, `fr-CA`, `fr-FR`, `fr-LU`, `fr-CH`,
`de-AT`, `de-DE`, `de-LU`, `de-CH`, `el-CY`, `el-GR`, `iw-IL`, `hi-IN`, `hu-HU`, `is-IS`,
`in-ID`, `ga-IE`, `it-IT`, `it-CH`, `ja-JP`, `ko-KR`, `lv-LV`, `lt-LT`, `mk-MK`, `ms-MY`,
`mt-MT`, `no-NO`, `pl-PL`, `pt-BR`, `pt-PT`, `ro-RO`, `ru-RU`, `sr-BA`, `sr-ME`, `sr-CS`,
`sr-RS`, `sk-SK`, `sl-SI`, `es-AR`, `es-BO`, `es-CL`, `es-CO`, `es-CR`, `es-DO`, `es-EC`,
`es-SV`, `es-GT`, `es-HN`, `es-MX`, `es-NI`, `es-PA`, `es-PY`, `es-PE`, `es-PR`, `es-ES`,
`es-US`, `es-UY`, `es-VE`, `sv-SE`, `th-TH`, `tr-TR`, `uk-UA`, `vi-VN`

</details>

### Translation file properties

| Property         | Type      | Description      |
| ---------------- | --------- | ---------------- |
| id <sup>2</sup>            | String    | unique identifier of translation file from i18nature |
| name <sup>1</sup>          | String    | your translation file short description |
| filename <sup>1</sup>      | String    | name of the file |
| extension <sup>1</sup>     | String    | eg.: json, yml, yaml, toml, arb, po, xml, strings, ini, properties |
| locales <sup>1</sup>       | String[]  | list of locales like ['en-GB', 'hu-HU'] |
| default_locale <sup>1</sup> | String   | default locale e.g.: 'en-GB' |
| wrapper_key      | String    | first key in content of translation file e.g.: %language or %locale |
| directory <sup>1</sup>     | String    | relative path to translation files |

<sup>1</sup> Required property<br>
<sup>2</sup> Not required for first upload, but required for subsequent upload and download actions

### Locale directory hierarchy

⚠️ **WARNING**: You can use `language` (en) and `locale` (en-GB) placeholder keys in directory, filename as well.

Example project structure in this repository:

```text
    example/
      i18n/
        en/
          common.json
        hu/
          common.json
      locales/
        base_en-GB.yml
        base_hu-HU.yml
      ...
    .i18naturerc.json
    ...
```

Example .i18naturerc.json for example directories

```json
{
    "version": 1,
    "project_api_key": "API_KEY",
    "translation_files": [
        {
            "name": "Base",
            "filename": "base_%locale",
            "extension": "yml",
            "wrapper_key": "%language",
            "locales": ["en-GB", "hu-HU"],
            "default_locale": "en-GB",
            "directory": "example/locales"
        },
        {
            "name": "Common",
            "filename": "common",
            "extension": "json",
            "locales": ["en-GB", "hu-HU"],
            "default_locale": "en-GB",
            "directory": "example/i18n/%language/"
        }
    ]
}
```

See the [example/](./example) directory for a complete example.

## License

[ISC](./LICENSE)

## Developer

[Dániel Sipos](https://siposdani87.com)

## Sponsors

This project is generously supported by [TrophyMap](https://trophymap.org), [I18Nature](https://i18nature.com), and several other amazing organizations.
