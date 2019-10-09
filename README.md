# html-bricks-plugin-html-minify

Html minification for [html-bricks](https://github.com/html-bricks/html-bricks) using [HTMLMinifier](https://www.npmjs.com/package/html-minifier).

> You should use this as the last plugin in your config, as it will remove attributes that might be used by other plugins.

## Requirements

`html-bricks` >= 0.3.

## Installation

Install using npm

`npm install --save-dev html-bricks-plugin-html-minify`

Then include the plugin in your config

```json
{
  "plugins": [
    "plugin-html-minify"
  ]
}
```

## Default config

```js
const options = {
  collapseBooleanAttributes: true,
  caseSensitive: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  continueOnParseError: false,
  html5: true,
  decodeEntities: true,
  keepClosingSlash: false,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: false,
  preserveLineBreaks: false,
  preventAttributesEscaping: false,
  quoteCharacter: '"',
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true
}
```
