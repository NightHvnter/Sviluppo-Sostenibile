import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { Agenda2030Component } from './agenda2030/agenda2030.component';
import { GoalComponent } from './goal/goal.component';
import { SourcesComponent } from './sources/sources.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'agenda-2030',
    component: Agenda2030Component,
    children: [
      {
        path: ":goal",
        pathMatch: 'full',
        redirectTo: '/goals/:goal'
      }
    ]
  },
  { 
    path: 'goals/:goal',
    component: GoalComponent
  },
  {
    path: 'sources',
    component: SourcesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
