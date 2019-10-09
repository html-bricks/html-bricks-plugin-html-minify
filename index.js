const htmlReg = /\.html$/
const minify = require('html-minifier').minify

exports.postBuild = function postBuild (files, config) {
  return new Promise(function (resolve, reject) {
    try {
      const next = files.map(file => {
        if (file.dest.match(htmlReg)) {
          const res = minify(file.content)
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
