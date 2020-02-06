// Vendors
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public activeRoute: string;

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activeRoute = val.url;
      }
    })
  }

  ngOnInit() {
    this.getRoute();
  }

  private getRoute() {
    this.activeRoute = this.router.url;
  }

}
