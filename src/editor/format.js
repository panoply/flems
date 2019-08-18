import m from 'mithril'
import b from 'bss'
import { findFile } from '../utils'
import icon from '../components/icon'
import toolbarButton from '../components/toolbarbutton'

import formatIcon from '../icons/format.svg'
import gearsIcon from '../icons/gears.svg'

export default (model, actions) => m('.format' + b
  .position('absolute')
  .d('block')
  .t(model.toolbar() + 5)
  .h(32)
  .w(32)
  .right(0)
  .cursor('pointer'),
    runFormat(model, actions)
)

function runFormat(model, actions) {

  return m('.icon' + b
    .d('block')
    .position('relative')
    .zi(30)
    .borderRadius(1)
    .c('gray')
    .$hover(
      b.c('white')
    ),
    icon({
      onclick: () => actions.formatFile(model),
      size: 32,
      class: b.p(5).d('block').class
    }, formatIcon)

  )
}


