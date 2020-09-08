import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../nav/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '../footer/footer.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginInterceptorService} from '../services/login-interceptor.service';
import { UserLoginGuard } from './user-login/user-login.guard';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AlertComponent } from '../alert/alert.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BaselayerComponent } from './baselayer/baselayer.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, HomeComponent,
    UserLoginComponent, MainLayoutComponent, UserRegisterComponent, AlertComponent, BaselayerComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: LoginInterceptorService, multi: true}, UserLoginGuard]
})
export class PagesModule { }
