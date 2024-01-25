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

export const Breathing = trigger('Breathing', [
  state('not-hover', style({
    'background-color': 'none'
  })),
  state('hover', style({
    'background-color': 'rgb(15, 9, 110)'
  })),
  transition('hover => not-hover', [
    animate('.2s')
  ]),
  transition('not-hover => hover', [
    animate('.2s')
  ])
])

export const chiSiamoAnim = trigger('chiSiamoAnim', [
  state('aperto', style({
    transform: 'translateX(-100%)'
  })),
  state('chiuso', style({
    transform: 'translateX(0)'
  })),
  transition('aperto => chiuso', [
    animate('.40s ease-out')
  ]),
  transition('chiuso => aperto', [
    animate('.40s ease-in-out')
  ])
])

export const parseFromRight = trigger('parseFromRight', [
  state('on', style({
    'transfor': 'translateX(0)',
    'opacity': 1
  })),
  state('off', style({
    'transfor': 'translateX(-500px)',
    'opacity': 0
  })),
  transition('aperto => chiuso', [
    animate('.40s ease-out')
  ]),
  transition('chiuso => aperto', [
    animate('.40s ease-in-out')
  ])
])