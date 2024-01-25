import { Component } from '@angular/core';
import { RoutingService } from '../routing.service';
import { goals } from '../routing.service';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss'
})
export class GoalComponent {
  currentGoal = goals[this.router.choosenGoal];

  constructor(private router: RoutingService) { }
}
