import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  url: string = 'https://reqres.in/api/users?page=1';

  setUrl(page_no: number) {
    this.url = `https://reqres.in/api/users?page=${page_no}`;


  }



  getUsers() {


    return this.http.get(this.url);


  }
}
