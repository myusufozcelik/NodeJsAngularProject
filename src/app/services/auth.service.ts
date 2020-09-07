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

  login(loginUser: LoginUser) {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    this.http.post(`${this.path}/login`, loginUser, {headers})
    .subscribe(data => {
      this.loggedIn = true;
      this.saveToken(data['token']);
    });

  }

  saveToken(token) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  logOut() {
    localStorage.removeItem(this.TOKEN_KEY);
    this.loggedIn = false;
  }

  get isAuthenticated() {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLoggedIn() {
      return this.loggedIn;
  }

}
