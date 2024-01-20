import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

export const ParsingSettings = trigger('ParsingSettings', [
  state('aperto', style({
    transform: 'translateX(0)'
  })),
  state('chiuso', style({
    transform: 'translateX(100%)'
  })),
  transition('aperto => chiuso', [
    animate('.40s ease-out')
  ]),
  transition('chiuso => aperto', [
    animate('.40s ease-out')
  ])
])
