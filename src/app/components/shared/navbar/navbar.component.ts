import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/utils/security.util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor() { }

  public user: any;

  ngOnInit(): void {
    this.user = Security.getUser();
  }

}
