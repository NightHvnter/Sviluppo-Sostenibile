import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  toHome() {
    this.router.navigateByUrl('home');
  }

  toGit(){
    window.open('https://github.com/NightHvnter/Sviluppo-Sostenibile/');
  }

  toAgenda2030() {
    this.router.navigateByUrl('agenda-2030');
  }

  constructor(private router: Router) { }
}
