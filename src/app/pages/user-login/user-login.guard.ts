import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Injectable } from '@angular/core';
import {AuthService} from '../../services/auth.service';
@Injectable()
export class UserLoginGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const logged = this.authService.isLoggedIn();
        if (logged) { return true; }

        this.router.navigate(['login']);
        return false;
    }

}
