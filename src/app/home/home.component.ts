import { Component, Directive, HostListener, Inject } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { parseFromRight } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [parseFromRight],
})
export class HomeComponent {
  state1: string = 'on';

}
