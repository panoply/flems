import m from 'mithril'
import b from 'bss'

import icon from '../components/icon'
import lockIcon from '../icons/lock.svg'

export default (model, actions) =>
  m('.button'
    + b
      .position('relative')
      .f('right')
      .c('gray')
      .w('100%')
      .textAlign('right')
      .minHeight(model.toolbar())
      .background('transparent')
      .fontSize(14)
      .zi(20)

  ,
    m('.format'
      +
      b.position('absolute')
        .right(0)
    ,
       runFormat(model, actions)
    )
  )


function runFormat(model, actions) {
  return model.state.files.map(file =>

    m('button' +
    b
    .p('relative')
    .d('block')
    .p(7, 10)
    .c('hotpink')
    .fw('600')
    .cursor('pointer')
    .$hover(`
        color: gray;
    `)
    ,
     {
       onclick: () => actions.formatFile(file)
     }, 'PRETTY DIFF'
    )
  )

}


