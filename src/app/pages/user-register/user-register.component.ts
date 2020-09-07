import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {


  userForm = new FormGroup({
    user_name: new FormControl('', [ Validators.required, Validators.minLength(5)]),
    user_password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
    if (this.userForm.valid ) {

    }
  }

}
