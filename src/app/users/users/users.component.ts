import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { User } from '../../user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private dataservice: DataService, private router: Router, private route: ActivatedRoute) { }
  users_list: User[];
  total_pages: number;
  total_items: number;

  ngOnInit(): void {

    this.dataservice.getUsers().subscribe(response => {

      this.users_list = response["data"];
      this.total_pages = response["total_pages"];
      this.total_items = response["total"];

    });
  }




  loadPage(currentPage) {
    this.router.navigate(['/users'], { queryParams: { page: currentPage["page"] } });

    this.dataservice.setUrl(currentPage["page"]);
    this.dataservice.getUsers().subscribe(response => {

      this.users_list = response["data"];
      this.total_pages = response["total_pages"];
      this.total_items = response["total"];


    });


    // using query params
    // let page: number;

    // this.route.queryParams.subscribe(data => page = data["page"]);
    // this.dataservice.setUrl(page);

    // this.dataservice.getUsers().subscribe(response => {

    //   this.users_list = response["data"];
    //   this.total_pages = response["total_pages"];
    //   this.total_items = response["total"];


    // });











  }

}
