import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const ParsingSettings = trigger('ParsingSettings', [
  transition('chiuso => aperto', [
    style({
        width: '*'
    })
  ]),
  transition('aperto => chiuso', [
    style({
        width: 0,
    }),
    animate('1s')
  ])
])
