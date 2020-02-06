// Vendors
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-area',
  templateUrl: './personal-area.component.html',
  styleUrls: ['./personal-area.component.scss']
})
export class PersonalAreaComponent implements OnInit {

  public user;

  constructor() { }

  ngOnInit() {
    this.getLoginData();
  }

  private getLoginData(): void {
    const loginData = JSON.parse(localStorage.getItem('user'));
    const user = loginData.user;
    this.user = user;
  }

}
