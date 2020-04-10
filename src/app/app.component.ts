import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'routemobile';

  constructor(public auth: AuthService) {


  }
  isLoggedIn: boolean;


  ngOnInit(): void {
    this.auth.token$.subscribe(token => {
      if (token) {
        this.isLoggedIn = true;
      }
      else
        this.isLoggedIn = false;

    });

  }










  onLogout() {

    this.auth.logout();


  }



}
