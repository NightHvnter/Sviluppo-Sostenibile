import { Component } from '@angular/core';
import { Breathing } from '../animations';

export interface Users {
  name: string;
  state: boolean;
}

@Component({
  selector: 'app-chi-siamo',
  templateUrl: './chi-siamo.component.html',
  styleUrl: './chi-siamo.component.scss',
  animations: [Breathing] 
})
export class ChiSiamoComponent {
  users: Users[] = [
    {
      name: 'Giulio Cesare Baldassarre',
      state: false
    },
    {
      name: 'Chiara Di Palma',
      state: false
    },
    {
      name: 'Yunes Azzouz',
      state: false
    },
    {
      name: 'Leonardo Laureti',
      state: false
    } 
  ]

  changeState(user: Users){
      user.state = !user.state;
  }
}
