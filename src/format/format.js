import m from 'mithril'
import b from 'bss'
import icon from '../components/icon'

import { tab } from '../editor/tabs'
import { rcfiles } from './presets'

import formatIcon from '../icons/format.svg'
import gearsIcon from '../icons/gears.svg'

export default (model, actions) => [
  m('.format'
    + b
      .position('absolute')
      .d('block')
      .t(model.toolbar() + 5)
      .h(40)
      .w(40)
      .r(0)
      .cursor('pointer')
    ,
    m('.icon'
      + b
        .position('relative')
        .d('inline-block')
        .zi(30)
        .c('gray')
        .$hover(
          b.c('white')
        )
      ,
      icon({
        onclick: () => actions.formatFile(model),
        size: 32,
        class: b.p(5).d('block').class
      }, formatIcon)
    )
  ),
  m('.format-bottom'
    + b
      .position('absolute')
      .d('block')
      .b(0)
      .h(40)
      .w(40)
      .r(0)
      .cursor('pointer')
    ,
    m('.icon'
      + b
        .d('inline-block')
        .position('relative')
        .zi(30)
        .borderRadius(1)
        .c('gray')
        .$hover(
          b.c('white')
        )
      ,
      icon({
        // NEEDS ATTENTION
        onclick: () => model.formatRules = !model.formatRules ? true : false,
        size: 32,
        class: b.p(5).d('block').class
      }, gearsIcon)
    )
  ),
  model.formatRules && [
    m('.format-rules'
      + b
        .d('flex')
        .w('100%')
        .h(40)
        .b(0)
        .position('absolute')
        .r(0)
        .background('#21292d')
        .zi(20)
        .br(1)
        .fontSize(14)
        .c('white')
      ,
      m('div'
        + b
          .p('relative')
          .f('right')
          .d('flex')
          .c('gray')
          .w('100%')
        ,
        model.state.files.map(file => rcfiles.includes(file.name) && [
          tab(
            m('div'
              + b.d('flex')
              , file.name
              , file.editable === false && icon({
                size: 16,
                class: b.ml(6).class
              }, lockIcon)
            ), () => actions.select(file), file === model.selected(), model
          )
        ])
      )
    )
  ]
]


