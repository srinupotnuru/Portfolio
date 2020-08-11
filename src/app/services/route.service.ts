import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteService {
  constructor(private route: Router) {}

  public fly(des) {
    this.route.navigate([des]);
  }
}
