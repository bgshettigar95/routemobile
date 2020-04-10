import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/login/login.component';
import { AuthGuard } from 'src/app/auth-guard.service';


const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'users', canActivate: [AuthGuard], loadChildren: () => import('src/app/users/users.module').then(m => m.UsersModule) },
  { path: '', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
