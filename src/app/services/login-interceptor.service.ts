import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(request, next) {
    const authService = this.injector.get(AuthService);

    if (authService.isAuthenticated) {

        const authRequest = request.clone({
          // her isteğin başına authorization ve değerini ekler
          headers: request.headers.set('authorization', 'token ' + authService.token)
        });
        return next.handle(authRequest);
              // Sonuç olarak yapacağımız her isteğin başına token değerini koyarak yapıyoruz.
    }

    else {
      return next.handle(request);
    }

  }
}
