import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { AlertService } from 'src/app/services/alert.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


  constructor(private authService: AuthService, private route: Router,
              private alertService: AlertService) { }
  loginUser: any = {};

  ngOnInit(): void {
    this.routeProcess();
  }

  routeProcess(): void {
    if (this.authService.isAuthenticated) {
       this.route.navigate(['/']);
    }
    else {
     this.route.navigate(['login']);
    }
  }

  login(loginUser): any {
    this.authService.login(loginUser);
    console.log(loginUser);
    if (this.authService.isLoggedIn()) {
      this.route.navigate(['/']);
      console.log(this.getSuccessMessage());
    }
    console.log(this.getErrorMessage());
    // else alert göster
    this.getErrorMessage();
  }

  getSuccessMessage(): void {
    this.alertService.success('Giriş başarılı, anasayfaya yönlendiriliyorsunuz.');
  }

  getErrorMessage(): void {
    this.alertService.error('Kullanıcı adı veya şifre hatalı, lütfen tekrar deneyiniz.');
  }

  clearMessage(): void {
    this.alertService.clearAlertMessage();
  }

}

