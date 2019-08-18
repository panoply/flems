import m from 'mithril'
import b from 'bss'
import { tab } from '../editor/tabs'

export default (model, actions) =>  m('.format-rules' + b
  .position('absolute')
  .d('block')
  .w(400)
  .h('100%')
  .t(model.toolbar())
  .r(0)
  .b('#21292d')
  .zi(20)
  .br(1)
  .c('white')
  .$animate('0.4s ease-in-out', {
    from: b.transform('translateX(-100%)').style,
    to: b.transform('translateX(0px)').style,
  })
  , model.state.files.map(file =>
       ![
      '.prettierrc',
      '.prettydiffrc',
      '.jsbeautifyrc'
    ].includes(file.name) && tab(
      m('div' + b.d('flex'),
        file.name,
        file.editable === false && icon({ size: 16, class: b.ml(6).class }, lockIcon)
      ),
      () => actions.select(file),
      file === model.selected(),
      model
    )
  )
)
