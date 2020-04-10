import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from 'src/app/users/users-routing.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    PaginationModule.forRoot()
  ]
})
export class UsersModule { }
