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

const formatters = {

  // RULESET NEED TO BE PASSED IN
  // unpkg rule, will best to serve these at static assets on `static.flems`
  prettydiff: file => load('https://unpkg.com/prettydiff@101.2.3/js/browser.js').then(() => new Promise((resolve, reject) => {

    // TODO
    // Tidy this up, generate instance of prettydiff
    let output = ''
    const prettydiff = window.prettydiff
    const options = window.prettydiff.options

    options.preserve = 2
    options.mode = 'beautify'
    options.source = file.content
    output = prettydiff()

    // Error handling with prettydiff is best to listen for sparser issues
    prettydiff.sparser.parseerror.length > 0
      ? reject(prettydiff.sparser.parseerror)
      : resolve({ code:  output })

  }))
}

export default formatters
