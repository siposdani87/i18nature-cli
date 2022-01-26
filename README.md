[![Version](https://img.shields.io/npm/v/i18nature-cli.svg?style=square)](https://www.npmjs.com/package/i18nature-cli)
[![Download](https://img.shields.io/npm/dt/i18nature-cli.svg?style=square)](https://www.npmjs.com/package/i18nature-cli)
[![License](https://img.shields.io/npm/l/i18nature-cli.svg?style=square)](./LICENSE)

# I18Nature-CLI

Command-line tool to init, upload and download translation files to I18Nature localization platform ([https://i18nature.com](https://i18nature.com)).

## Usage

There is a variety of ways to use/install. The quickest way is:

```bash
npm install -g i18nature-cli

i18nature --help
```

### How to install/run using `npm`

#### Using `npm`:

```bash
# Via npm init
npm init i18nature-cli --help

# Via npx
npx i18nature-cli --help

# Install globally
npm install -g i18nature-cli
i18nature --help
```

## Command line arguments

```
Command-line tool of I18Nature localization tool.

Usage: i18nature <cmd> [args]

Commands:
  i18nature init [project_api_key]  Create .i18naturerc.json file.
  i18nature upload                  Upload translation files.
  i18nature download                Download translation files.

Options:
  -h, --help                   Show help                               [boolean]
      --version                Show version number                     [boolean]
  -v, --verbose                Run with verbose logging                [boolean]
  -y, --yes                    Skip prompts                            [boolean]
      --debug                  Debug mode                              [boolean]
      --overwriteTranslations  Overwrite translation files on upload   [boolean]

for more information, find our website at https://i18nature.com
```

## Creating a config file for I18Nature project

When creating a config file, you may provide or generate a `api_key` of your project from [I18Nature](https://i18nature.com)). With CLI you can initialize `.i18naturerc.json` config file. This file contains your list of your translation files. The translation file has many properties like (`id, name, filename, extension, locales, default_locale, wrapper_key, directory`).

🔴 **IMPORTANT**: You can use `%language` and `%locale` placeholder keys in `filename, wrapper_key, directory` properties.

Supported locales: ['sq-AL', 'ar-DZ', 'ar-BH', 'ar-EG', 'ar-IQ', 'ar-JO', 'ar-KW', 'ar-LB', 'ar-LY', 'ar-MA', 'ar-OM', 'ar-QA', 'ar-SA', 'ar-SD', 'ar-SY', 'ar-TN', 'ar-AE', 'ar-YE', 'be-BY', 'bn-IN', 'bn-BD', 'bg-BG', 'ca-ES', 'zh-CN', 'zh-HK', 'zh-SG', 'zh-TW', 'hr-HR', 'cs-CZ', 'da-DK', 'nl-BE', 'nl-NL', 'en-AU', 'en-CA', 'en-IN', 'en-IE', 'en-MT', 'en-NZ', 'en-PH', 'en-SG', 'en-ZA', 'en-GB', 'en-US', 'et-EE', 'fi-FI', 'fr-BE', 'fr-CA', 'fr-FR', 'fr-LU', 'fr-CH', 'de-AT', 'de-DE', 'de-LU', 'de-CH', 'el-CY', 'el-GR', 'iw-IL', 'hi-IN', 'hu-HU', 'is-IS', 'in-ID', 'ga-IE', 'it-IT', 'it-CH', 'ja-JP', 'ko-KR', 'lv-LV', 'lt-LT', 'mk-MK', 'ms-MY', 'mt-MT', 'no-NO', 'pl-PL', 'pt-BR', 'pt-PT', 'ro-RO', 'ru-RU', 'sr-BA', 'sr-ME', 'sr-CS', 'sr-RS', 'sk-SK', 'sl-SI', 'es-AR', 'es-BO', 'es-CL', 'es-CO', 'es-CR', 'es-DO', 'es-EC', 'es-SV', 'es-GT', 'es-HN', 'es-MX', 'es-NI', 'es-PA', 'es-PY', 'es-PE', 'es-PR', 'es-ES', 'es-US', 'es-UY', 'es-VE', 'sv-SE', 'th-TH', 'tr-TR', 'uk-UA', 'vi-VN']

### Translation file properties

| Property         | Type      | Description      |
| ---------------- | --------- | ---------------- |
| id **            | String    | uniq identifier of translation file from i18nature |
| name *           | String    | your translation file short description |
| filename *       | String    | filename without extension |
| extension *      | String    | eg.: json, yml, yaml, arb, po, xml, strings, ini, properties |
| locales *        | String[]  | list of locales like ['en-GB', 'hu-HU'] |
| default_locale * | String    | default locale eg.: 'en-GB' |
| wrapper_key      | String    | first key in content of translation file eg.: %language or %locale |
| directory *      | String    | relative path to translation files |

**not required for first upload, but required for other upload and download

*required properties

### Locale directory hierarchy

⚠️ **WARNING**: You can use `language` (en) and `locale` (en-GB) keys in directory, filename as well.

Example project strucure in this repository:
```
    exammple/
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
```
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

Create config file will copy the content to your project directory, and modify the `.i18naturerc.json` in the root folder.

See this [repository](https://github.com/siposdani87/i18nature-cli) for a complete example.

## License

[ISC](./LICENSE)
