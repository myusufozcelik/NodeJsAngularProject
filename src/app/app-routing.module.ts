import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
import {UserLoginGuard} from '../app/pages/user-login/user-login.guard';
import { UserRegisterComponent } from './pages/user-register/user-register.component';
const routes: Routes = [
{
  path: '', component: MainLayoutComponent, canActivate: [UserLoginGuard] , children: [{
   path: '', component: HomeComponent,
  }],
},
{path: 'login', component: UserLoginComponent},
{path: 'register', component: UserRegisterComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
