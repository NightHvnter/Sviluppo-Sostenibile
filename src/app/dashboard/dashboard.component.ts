import { Component } from '@angular/core';
import { ParsingSettings, chiSiamoAnim } from '../animations'
import { RoutingService } from '../routing.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  animations: [
    ParsingSettings, chiSiamoAnim
  ]
})
export class DashboardComponent {

  chiSiamoShow: boolean = true;
  settings: boolean = false;

  showHideSettings() { this.settings = !this.settings; }
  showHideChiSiamo() { this.chiSiamoShow = !this.chiSiamoShow; }

  constructor(public routing: RoutingService) { }

}
