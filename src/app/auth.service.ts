import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  private token: string;

  token$ = new BehaviorSubject<string>(null);

  login(credentials) {

    return this.http.post('https://reqres.in/api/login', credentials).pipe(
      map(response => {



        if (response && response["token"]) {

          localStorage.setItem('token', response["token"]);
          this.updateAuthToken(response["token"]);




          return true;
        }
      })
    );
  }

  logout() {


    localStorage.removeItem('token');
    this.token = null;
    this.token$.next(null);

  }



  updateAuthToken(token: string): void {
    this.token = token;
    this.token$.next(this.token);


  }


}
