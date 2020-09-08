import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {LoginUser} from '../model/loginUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  path = environment.path;

  TOKEN_KEY = 'token';

  loggedIn = false;

  // tslint:disable-next-line: typedef
  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http.post(`${this.path}/login`, loginUser, {headers})
    .subscribe(data => {
      this.loggedIn = true;
      // tslint:disable-next-line: no-string-literal
      this.saveToken(data['token']);
    });

  }

  // tslint:disable-next-line: typedef
  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  // tslint:disable-next-line: typedef
  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.loggedIn = false;
  }

  // tslint:disable-next-line: typedef
  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  // tslint:disable-next-line: typedef
  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
      return this.loggedIn;
  }

}
