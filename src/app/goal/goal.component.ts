import { Component } from '@angular/core';
import { RoutingService } from '../routing.service';
import { goals } from '../routing.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrl: './goal.component.scss'
})
export class GoalComponent {
  currentGoal = goals[sessionStorage.getItem('currentGoal') as unknown as number];
  constructor(private router: RoutingService) { }
}
