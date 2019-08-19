# Fork Overview
This fork is an active WIP which aims to implement features to flems. The features here are not planned and still need to be considered/reviewed by [Porsager](https://github.com/porsager).

## In Progress
These features are currently in progress and under development but are yet to be considered or reviewed.

### Formatting
- Supports Prettier, JS Beautify and PrettyDiff rules (In Progress)
- Format configuration UI Component
- Format Toggle Button
- Format key binding (cmd-shift-f)
- Auto formatting (Executes format in 5 second intervals)

#### Default
By default, formatting is applied according to the universal [EditorConfig](https://editorconfig.org/) specification. When saving a flems module (downloading), the default rules will be exported as`.editorconfig` file.

#### Extensions
Users will have the option to use a formatting extension. The supported formatting extensions are:

- [Prettier](https://prettier.io)
- [PrettyDiff](http://prettydiff.com)
- [JS Beautify](https://beautifier.io)

Extension can be applied on a per-language basis. The goal here is to provide multiset formatting so your flems module could (for example) use Prettier to format HTML (.html), PrettyDiff to format CSS/SCSS (.css, .scss) and JS Beautify to format JavaScript/Typescript (.ts, .js) files.

> Extensions will respect and adhere to the default `.editorconfig` settings.

Additonally, when saving a flems module (downloading) the extension formatting rules will be exported as relative`.rc` file type.

# Ideas
These are features I'd like to explore and may attempt at implementing.

## Support Markdown files
Seems fairly easy to do, would be a great feature.

##### Ideas
- Supporting Markdown styles (Github, Gitlab etc)

## SupportYAML and TOML file types
Supporting both these files types might prove to be helpful for many users.

##### Ideas
- Parse YAML and TOML files into JavaScript objects so as to use them as data sources and include them with `import`

## Leveraging Local Storage
Allowing users to save their flem modules and settings to localstorage.

## Modules section
A `Modules` Section, which could save upto 5mb of flems URL references within LocalStorage.

- Projects Panel
    - Lists all saved flems modules existing in localstorage
    - Provides functionality to export (download) any previously saved flems
    - Provides remove/clean functionality of saved flems
- Format Settings Panel
    - Formatting configurations to use creating a flems module
- Notification warning when storages start to approach 5mb limit

### Flems Badge
Support flems badge which links to a flems module so users can reference and refer a flems example to showcase a project. Useful for Github Repositories.

## Straps
Provide a list of common boileplate/bootstrapped starter flem modules which aim to help users launch a "quick start" flems with all their favourite dependencies and settings already applied

Think of strap like a CLI Yeoman command, you call them and they launch a ready flems module.

For example, a "Mithril Strap" could load the following:
- Loads latest mithril version
- Loads latest BSS
- Sets formatting rules to specific style
- Requires Babel
- Applies Minimal boilerplate

## Minified Flems module export (Downloads)
Could provide the option to export/download a minified production ready flems module.
- Apply PrettyDiff Minification on files before export

## Formatting Playground
Could explore expanding the formatting feature and create a formatting playground where users could test format rules so to help them understand formatting terms visually.

## Intellisense / Auto-Complete / Snippets
Anyone one of these 3 could be helpful and faily easy to integrate, I'm quite sure CodeMirror has it's own take on this but it puts weight on the end build, so probably best to skip.
