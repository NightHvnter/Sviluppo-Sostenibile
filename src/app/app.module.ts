import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChiSiamoComponent } from './chi-siamo/chi-siamo.component';
import { Agenda2030Component } from './agenda2030/agenda2030.component';
import { GoalComponent } from './goal/goal.component';
import { SourcesComponent } from './sources/sources.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ChiSiamoComponent,
    Agenda2030Component,
    GoalComponent,
    SourcesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
