import { Component } from '@angular/core';
import { ParsingSettings } from '../animations'
import { RoutingService } from '../routing.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    ParsingSettings
  ]
})
export class DashboardComponent {

  settings: boolean = false;

  showHideSettings() { this.settings = !this.settings; }

  constructor(public routing: RoutingService) { }

}
