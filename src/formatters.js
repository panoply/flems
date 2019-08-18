import { memoize } from './utils'

const load = memoize(url =>
  new Promise((resolve, reject) => {
    const el = document.createElement('script')
    el.async = false
    el.charset = 'utf-8'
    el.src = url
    document.body.appendChild(el)
    el.onload = resolve
    el.onerror = err => reject('Could not load formatter from ' + url)
  })
)

// UNMINIFIED CDN SOURCES
// consider serving these from static.flems.io/
const supported = {
  prettydiff: 'https://unpkg.com/prettydiff@101.2.3/js/browser.js',
  jsbeautify: 'https://cdn.rawgit.com/beautify-web/js-beautify/v1.10.2/js/lib/beautify.js', // eslint-disable-line
  prettier: 'https://unpkg.com/browse/prettier@1.18.2/index.js'


}

const formatters = {

  // eslint-disable-line
  prettydiff: file => load(supported.prettydiff).then(() =>
    new Promise((resolve, reject) => {
      // TODO
      // Tidy this up, generate instance of prettydiff
      let output = ''
      const prettydiff = window.prettydiff
      const options = window.prettydiff.options

      options.preserve = 2
      options.mode = 'beautify'
      options.source = file.content
      output = prettydiff()

      // Error handling with prettydiff is best to listen
      // for sparser issues
      prettydiff.sparser.parseerror.length > 0
        ? reject(prettydiff.sparser.parseerror)
        : resolve({ code:  output })

    })
  ),
  prettier: file => load(supported.prettier).then(() =>
    new Promise((resolve, reject) => {

      // TODO

    })
  ),
  'js-beautify': file => load(supported.jsbeautify).then(() =>
    new Promise((resolve, reject) => {

      const options = {
        indent_size: 2, // eslint-disable-line
        space_in_empty_paren: true // eslint-disable-line
      }

      const formatted = window.js_beautify(file.content, options)

      !formatted ? reject(formatted) : resolve({ code: formatted })

    })
  )
}

export default formatters
