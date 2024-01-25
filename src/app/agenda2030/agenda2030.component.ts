import { Component } from '@angular/core';
import { RoutingService } from '../routing.service';
import { goals } from '../routing.service';

@Component({
  selector: 'app-agenda2030',
  templateUrl: './agenda2030.component.html',
  styleUrl: './agenda2030.component.scss'
})

export class Agenda2030Component {
  goals: any = goals;
  constructor(public router: RoutingService) { }
}
