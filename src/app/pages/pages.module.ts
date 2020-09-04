import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../nav/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import {AppRoutingModule} from '../app-routing.module';
@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, 
    UserLoginComponent,MainLayoutComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ]
})
export class PagesModule { }
