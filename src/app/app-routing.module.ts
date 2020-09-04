import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLoginComponent } from './pages/user-login/user-login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
{
  path:"",component:MainLayoutComponent, children: [{
   path:"", component:HomeComponent
  }],
},
{path:"login",component:UserLoginComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
