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

## Ideas
These are features I'd like to explore and may attempt at implementing.

### Supporting Markdown files
Seems fairly easy to do, would be a great feature.

**Ideas**
- Prevent importing from `.md` file types
- Supporting Markdown styles (Github, Gitlab etc)
-

### Supporting YAML and TOML file types
Supporting both these files types might prove to be helpful for many users.

**Ideas**
- Parse YAML and TOML files into JavaScript objects so as to use them as data sources and include them with `import`


### Leveraging Local Storage
Allowing users to save their flem modules and settings to localstorage.

#### Ideas
A `Modules` Section, which could save upto 5mb of flems URL references within LocalStorage.

**Modules section**
- Projects Panel
    - Lists all saved flems modules existing in localstorage
    - Provides functionality to export (download) any previously saved flems
    - Provides remove/clean functionality of saved flems
- Format Settings Panel
    - Formatting configurations to use creating a flems module

**Additional Features**
- Notification warning when storages start to approach 5mb limit

### Flems Badge
Support flems badge which links to a flems module so users can reference and refer a flems example to showcase a project. Useful for Github Repositories.

### Intellisense / Auto-Complete / Snippets
Anyone one of these 3 could be helpful and faily easy to integrate.

### Straps
Provide a list of common boileplate started projects to help users launch a quick start flems with all their favourite dependencies and settings.

Think of strap like a CLI Yeoman command, you call them and they launch a ready flems module.

**Ideas**
- `strap mithril`
    - Loads latest mithril version
    - Loads latest BSS
    - Applies Minimal boilerplate
    - Sets formatting rules to specific style
    - Requires Babel

### Minified Export (Downloads)
Could provide the option to export/download a minified production ready flems module.

**Ideas**
- Apply PrettyDiff Minification on files before export

### Formatting Playground
Could explore expanding the formatting feature and create a formatting playground where users could test rules.
