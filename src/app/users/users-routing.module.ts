import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from 'src/app/users/users/users.component';



const routes: Routes = [
    { path: 'users', component: UsersComponent },
    { path: '', pathMatch: 'full', redirectTo: 'users' }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
