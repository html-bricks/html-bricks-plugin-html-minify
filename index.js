const htmlReg = /\.html$/
const minify = require('html-minifier').minify

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

exports.postBuild = function postBuild (files, config) {
  return new Promise(function (resolve, reject) {
    try {
      const next = files.map(file => {
        if (file.dest.match(htmlReg)) {
          const res = minify(file.content.toString(), options)
          return {
            ...file,
            content: Buffer.from(res)
          }
        }
        return file
      })

      resolve(next)
    } catch (e) {
      reject(e)
    }
  })
}
