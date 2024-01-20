import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  toGit(){
    window.location.href = 'https://github.com/NightHvnter/Sviluppo-Sostenibile/';
  }

  constructor(private router: Router) { }
}
