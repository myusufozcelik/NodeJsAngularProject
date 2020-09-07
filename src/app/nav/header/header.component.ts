import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }



  isLoggedOut(): void {
    this.authService.logOut();
  //  this.route.navigate(['/login'])
  }

}
