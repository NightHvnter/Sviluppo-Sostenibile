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

  toChiSiamo() {
    this.router.navigateByUrl('chi-siamo');
  }

  constructor(private router: Router) { }
}
