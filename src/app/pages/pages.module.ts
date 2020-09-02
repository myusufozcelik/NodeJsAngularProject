import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../nav/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent, UserLoginComponent],
  imports: [
    CommonModule,
    BrowserModule
  ]
})
export class PagesModule { }
